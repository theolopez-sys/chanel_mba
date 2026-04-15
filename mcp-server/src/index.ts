#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";
import { readFileSync, readdirSync, existsSync } from "fs";
import { join, dirname, basename } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = join(__dirname, "../..");

function readRepoFile(relativePath: string): string {
  const fullPath = join(REPO_ROOT, relativePath);
  if (!existsSync(fullPath)) {
    throw new Error(`File not found: ${relativePath}`);
  }
  return readFileSync(fullPath, "utf-8");
}

function listDir(relativePath: string): string[] {
  const fullPath = join(REPO_ROOT, relativePath);
  if (!existsSync(fullPath)) return [];
  return readdirSync(fullPath);
}

// ── Tool definitions ──────────────────────────────────────────────────────────

const TOOLS: Tool[] = [
  {
    name: "get_design_tokens",
    description:
      "Returns design tokens for the Internal European Design System (W3C DTCG format). " +
      "Covers colors, typography, spacing, borderRadius, shadow, components, darkMode, and effects. " +
      "Pass a category to get only that slice of the token tree.",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description:
            "Optional category to filter tokens. " +
            "One of: colors, typography, spacing, borderRadius, shadow, components, darkMode, effects",
          enum: [
            "colors",
            "typography",
            "spacing",
            "borderRadius",
            "shadow",
            "components",
            "darkMode",
            "effects",
          ],
        },
      },
    },
  },
  {
    name: "list_components",
    description:
      "Lists every design-system component, indicating whether a Figma spec doc " +
      "and/or a Swift/SwiftUI implementation exist for it.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "get_component_spec",
    description:
      "Returns the full Figma/design specification for a component — " +
      "anatomy, variants, spacing, typography, states, Figma auto-layout details, and usage rules.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          description:
            "Component name (with or without the DS prefix). " +
            "Examples: DSButton, DSBadge, DSCard, DSCheckbox, DSChips, DSDatePicker, " +
            "DSDialog, DSListItem, DSNavigationBar, DSNumberBadge, DSTooltip, DSActionSheet",
        },
      },
      required: ["component"],
    },
  },
  {
    name: "get_swift_component",
    description:
      "Returns the Swift/SwiftUI source code for an iOS component implementation.",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          description:
            "Component name (with or without the DS prefix). " +
            "Examples: DSButton, DSBadge, DSCard, DSHeader, DSTabBar, DSActivityItem",
        },
      },
      required: ["component"],
    },
  },
  {
    name: "get_design_guidelines",
    description:
      "Returns the complete Internal European Design System guidelines: " +
      "founding principles, color palette, typography scale, spacing grid, " +
      "border radius, shadows, icon rules, component overview, accessibility, and dos/don'ts.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "get_voice_guidelines",
    description:
      "Returns the brand voice and communication guidelines for the Internal European Design System.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
];

// ── Server setup ──────────────────────────────────────────────────────────────

const server = new Server(
  { name: "chanel-ds-mcp-server", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  const a = (args ?? {}) as Record<string, string>;

  switch (name) {
    // ── get_design_tokens ─────────────────────────────────────────────────────
    case "get_design_tokens": {
      const raw = readRepoFile("Figma/tokens.json");
      if (a.category) {
        const tokens = JSON.parse(raw) as Record<string, unknown>;
        if (!(a.category in tokens)) {
          throw new Error(
            `Unknown category "${a.category}". ` +
              `Available: ${Object.keys(tokens).join(", ")}`
          );
        }
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(tokens[a.category], null, 2),
            },
          ],
        };
      }
      return { content: [{ type: "text", text: raw }] };
    }

    // ── list_components ───────────────────────────────────────────────────────
    case "list_components": {
      const specNames = listDir("docs/components")
        .filter((f) => f.endsWith(".md"))
        .map((f) => basename(f, ".md"));

      const swiftNames = listDir("InternalApp/Components")
        .filter((f) => f.endsWith(".swift"))
        .map((f) => basename(f, ".swift"));

      const allNames = [...new Set([...specNames, ...swiftNames])].sort();

      const components = allNames.map((componentName) => ({
        name: componentName,
        hasSpec: specNames.includes(componentName),
        hasSwift: swiftNames.includes(componentName),
      }));

      return {
        content: [{ type: "text", text: JSON.stringify(components, null, 2) }],
      };
    }

    // ── get_component_spec ────────────────────────────────────────────────────
    case "get_component_spec": {
      const normalized = a.component.startsWith("DS")
        ? a.component
        : `DS${a.component}`;
      const content = readRepoFile(`docs/components/${normalized}.md`);
      return { content: [{ type: "text", text: content }] };
    }

    // ── get_swift_component ───────────────────────────────────────────────────
    case "get_swift_component": {
      const normalized = a.component.startsWith("DS")
        ? a.component
        : `DS${a.component}`;
      const content = readRepoFile(`InternalApp/Components/${normalized}.swift`);
      return { content: [{ type: "text", text: content }] };
    }

    // ── get_design_guidelines ─────────────────────────────────────────────────
    case "get_design_guidelines": {
      return { content: [{ type: "text", text: readRepoFile("DESIGN_SYSTEM.md") }] };
    }

    // ── get_voice_guidelines ──────────────────────────────────────────────────
    case "get_voice_guidelines": {
      return { content: [{ type: "text", text: readRepoFile("VOICE.md") }] };
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
});

// ── Entry point ───────────────────────────────────────────────────────────────

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Chanel DS MCP Server running on stdio");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});

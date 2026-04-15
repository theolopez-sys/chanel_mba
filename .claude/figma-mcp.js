#!/usr/bin/env node
/**
 * Figma MCP Server — local implementation
 * Uses the Figma REST API v1 directly (no npm dependency)
 * Token: read from FIGMA_ACCESS_TOKEN env var
 */

const https = require('https');
const readline = require('readline');

const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const BASE  = 'api.figma.com';

// ─── Figma REST helpers ──────────────────────────────────────────────────────

function figmaGet(path) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      { hostname: BASE, path, method: 'GET',
        headers: { 'X-Figma-Token': TOKEN, 'Content-Type': 'application/json' } },
      (res) => {
        let body = '';
        res.on('data', d => body += d);
        res.on('end', () => {
          try { resolve(JSON.parse(body)); }
          catch (e) { reject(new Error('JSON parse error: ' + body.slice(0, 200))); }
        });
      }
    );
    req.on('error', reject);
    req.end();
  });
}

// ─── MCP Protocol (JSON-RPC over stdio) ─────────────────────────────────────

const rl = readline.createInterface({ input: process.stdin, terminal: false });

function send(msg) {
  process.stdout.write(JSON.stringify(msg) + '\n');
}

function ok(id, result) {
  send({ jsonrpc: '2.0', id, result });
}

function err(id, code, message) {
  send({ jsonrpc: '2.0', id, error: { code, message } });
}

// ─── Tool definitions ────────────────────────────────────────────────────────

const TOOLS = [
  {
    name: 'figma_get_file',
    description: 'Get the full document tree of a Figma file',
    inputSchema: {
      type: 'object',
      properties: {
        file_key: { type: 'string', description: 'Figma file key (from the URL)' },
        node_id:  { type: 'string', description: 'Optional node ID to scope the result' },
      },
      required: ['file_key'],
    },
  },
  {
    name: 'figma_get_node',
    description: 'Get details about a specific node in a Figma file',
    inputSchema: {
      type: 'object',
      properties: {
        file_key: { type: 'string', description: 'Figma file key' },
        node_id:  { type: 'string', description: 'Node ID (format: 1234-5678)' },
        depth:    { type: 'number', description: 'Depth of children to return (default 2)' },
      },
      required: ['file_key', 'node_id'],
    },
  },
  {
    name: 'figma_get_components',
    description: 'List all published components in a Figma file',
    inputSchema: {
      type: 'object',
      properties: {
        file_key: { type: 'string', description: 'Figma file key' },
      },
      required: ['file_key'],
    },
  },
  {
    name: 'figma_get_styles',
    description: 'Get all styles (colors, text, effects) defined in a Figma file',
    inputSchema: {
      type: 'object',
      properties: {
        file_key: { type: 'string', description: 'Figma file key' },
      },
      required: ['file_key'],
    },
  },
  {
    name: 'figma_get_variables',
    description: 'Get all design tokens / variables defined in a Figma file',
    inputSchema: {
      type: 'object',
      properties: {
        file_key: { type: 'string', description: 'Figma file key' },
      },
      required: ['file_key'],
    },
  },
];

// ─── Tool handlers ───────────────────────────────────────────────────────────

async function callTool(name, args) {
  switch (name) {

    case 'figma_get_file': {
      const path = `/v1/files/${args.file_key}` +
        (args.node_id ? `?ids=${encodeURIComponent(args.node_id)}` : '');
      const data = await figmaGet(path);
      return JSON.stringify(data, null, 2);
    }

    case 'figma_get_node': {
      const depth = args.depth ?? 2;
      const nodeId = args.node_id.replace(/-/g, ':');
      const path = `/v1/files/${args.file_key}/nodes?ids=${encodeURIComponent(nodeId)}&depth=${depth}`;
      const data = await figmaGet(path);
      return JSON.stringify(data, null, 2);
    }

    case 'figma_get_components': {
      const data = await figmaGet(`/v1/files/${args.file_key}/components`);
      return JSON.stringify(data, null, 2);
    }

    case 'figma_get_styles': {
      const data = await figmaGet(`/v1/files/${args.file_key}/styles`);
      return JSON.stringify(data, null, 2);
    }

    case 'figma_get_variables': {
      const data = await figmaGet(`/v1/files/${args.file_key}/variables/local`);
      return JSON.stringify(data, null, 2);
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

// ─── JSON-RPC dispatch ───────────────────────────────────────────────────────

rl.on('line', async (line) => {
  let msg;
  try { msg = JSON.parse(line); }
  catch { return; }

  const { id, method, params } = msg;

  try {
    switch (method) {

      case 'initialize':
        ok(id, {
          protocolVersion: '2024-11-05',
          capabilities: { tools: {} },
          serverInfo: { name: 'figma-mcp-local', version: '1.0.0' },
        });
        break;

      case 'notifications/initialized':
        break;

      case 'tools/list':
        ok(id, { tools: TOOLS });
        break;

      case 'tools/call': {
        const { name, arguments: args } = params;
        const text = await callTool(name, args);
        ok(id, { content: [{ type: 'text', text }] });
        break;
      }

      default:
        err(id, -32601, `Method not found: ${method}`);
    }
  } catch (e) {
    err(id, -32603, e.message);
  }
});

rl.on('close', () => process.exit(0));

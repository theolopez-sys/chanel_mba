.PHONY: setup generate open clean

# ── Setup ─────────────────────────────────────────────────────────
setup:
	@echo "→ Installing XcodeGen..."
	brew install xcodegen
	@echo "→ Generating Xcode project..."
	$(MAKE) generate

# ── Generate Xcode project from project.yml ────────────────────────
generate:
	xcodegen generate
	@echo "✓ InternalApp.xcodeproj generated"

# ── Open in Xcode ──────────────────────────────────────────────────
open:
	open InternalApp.xcodeproj

# ── Full workflow: generate + open ─────────────────────────────────
dev: generate open

# ── Clean build artifacts ──────────────────────────────────────────
clean:
	rm -rf InternalApp.xcodeproj
	rm -rf ~/Library/Developer/Xcode/DerivedData/InternalApp-*
	@echo "✓ Cleaned"

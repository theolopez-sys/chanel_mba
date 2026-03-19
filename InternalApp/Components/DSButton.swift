import SwiftUI

// MARK: - DS Button
// Variants: primary (black), secondary (outlined), ghost

enum DSButtonVariant {
    case primary    // filled black
    case secondary  // outlined
    case ghost      // text only
    case accent     // gold fill
}

struct DSButton: View {
    let title: String
    let variant: DSButtonVariant
    var icon: String? = nil          // SF Symbol name
    var isFullWidth: Bool = false
    let action: () -> Void

    @State private var isPressed = false

    var body: some View {
        Button(action: action) {
            HStack(spacing: DSSpacing.sm) {
                if let icon {
                    Image(systemName: icon)
                        .font(.system(size: 14, weight: .semibold))
                }
                Text(title)
                    .font(.DS.label)
                    .kerning(1.2)
                    .textCase(.uppercase)
            }
            .padding(.horizontal, DSSpacing.xl)
            .padding(.vertical, DSSpacing.md)
            .frame(maxWidth: isFullWidth ? .infinity : nil)
            .background(background)
            .foregroundColor(foreground)
            .cornerRadius(DSRadius.full)
            .overlay(
                RoundedRectangle(cornerRadius: DSRadius.full)
                    .strokeBorder(borderColor, lineWidth: variant == .secondary ? 1 : 0)
            )
        }
        .buttonStyle(.plain)
        .scaleEffect(isPressed ? 0.97 : 1)
        .animation(.easeOut(duration: 0.1), value: isPressed)
        .simultaneousGesture(
            DragGesture(minimumDistance: 0)
                .onChanged { _ in isPressed = true }
                .onEnded { _ in isPressed = false }
        )
    }

    private var background: Color {
        switch variant {
        case .primary:   return .DS.black
        case .secondary: return .clear
        case .ghost:     return .clear
        case .accent:    return .DS.accent
        }
    }

    private var foreground: Color {
        switch variant {
        case .primary:   return .DS.white
        case .secondary: return .DS.black
        case .ghost:     return .DS.Text.body
        case .accent:    return .DS.white
        }
    }

    private var borderColor: Color {
        switch variant {
        case .secondary: return .DS.black
        default:         return .clear
        }
    }
}

// MARK: - Previews
#Preview {
    VStack(spacing: DSSpacing.lg) {
        DSButton(title: "Action principale", variant: .primary, icon: "plus") {}
        DSButton(title: "Action secondaire", variant: .secondary) {}
        DSButton(title: "Action ghost", variant: .ghost) {}
        DSButton(title: "Accent", variant: .accent, isFullWidth: true) {}
    }
    .padding()
    .background(Color.DS.neutralLower)
}

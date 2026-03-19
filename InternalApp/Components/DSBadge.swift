import SwiftUI

// MARK: - DS Badge
// Source: Badges - Guidelines (node 9443:3992)

enum DSBadgeVariant {
    case dark       // black fill (default)
    case accent     // gold fill
    case neutral    // light gray
    case outlined   // border only
}

struct DSBadge: View {
    let text: String
    var variant: DSBadgeVariant = .dark

    var body: some View {
        Text(text)
            .font(.DS.micro)
            .kerning(0.5)
            .textCase(.uppercase)
            .foregroundColor(foreground)
            .padding(.horizontal, 8)
            .padding(.vertical, 3)
            .background(background)
            .cornerRadius(DSRadius.full)
            .overlay(
                RoundedRectangle(cornerRadius: DSRadius.full)
                    .strokeBorder(borderColor, lineWidth: variant == .outlined ? 1 : 0)
            )
    }

    private var background: Color {
        switch variant {
        case .dark:     return .DS.black
        case .accent:   return .DS.accent
        case .neutral:  return .DS.neutralLower
        case .outlined: return .clear
        }
    }

    private var foreground: Color {
        switch variant {
        case .dark:     return .DS.white
        case .accent:   return .DS.white
        case .neutral:  return .DS.Text.body
        case .outlined: return .DS.Text.body
        }
    }

    private var borderColor: Color {
        variant == .outlined ? Color.DS.neutralMid : .clear
    }
}

// MARK: - DS Notification Dot
struct DSNotifDot: View {
    var color: Color = .DS.accent

    var body: some View {
        Circle()
            .fill(color)
            .frame(width: 8, height: 8)
            .overlay(
                Circle().strokeBorder(Color.DS.black, lineWidth: 1.5)
            )
    }
}

// MARK: - Previews
#Preview {
    HStack(spacing: DSSpacing.md) {
        DSBadge(text: "New", variant: .accent)
        DSBadge(text: "!", variant: .dark)
        DSBadge(text: "En cours", variant: .neutral)
        DSBadge(text: "Draft", variant: .outlined)
    }
    .padding()
    .background(Color.DS.surface)
}

import SwiftUI

// MARK: - DS Top Navigation Header
// Source: header (node 8139:439) — black background, uppercase white title

struct DSHeader: View {
    let greeting: String
    let name: String
    var onSearch: (() -> Void)? = nil
    var onNotification: (() -> Void)? = nil
    var notificationCount: Int = 0

    var body: some View {
        HStack(alignment: .bottom) {
            // Greeting + Name
            VStack(alignment: .leading, spacing: 2) {
                Text(greeting)
                    .font(.DS.micro)
                    .kerning(1.5)
                    .textCase(.uppercase)
                    .foregroundColor(.white.opacity(0.5))

                Text(name)
                    .font(.DS.h1)
                    .foregroundColor(.DS.white)
                    .kerning(0.3)
            }

            Spacer()

            // Action buttons
            HStack(spacing: DSSpacing.md) {
                if let onSearch {
                    DSIconButton(icon: "magnifyingglass", action: onSearch)
                }
                if let onNotification {
                    DSIconButton(
                        icon: "bell",
                        badge: notificationCount > 0 ? "\(notificationCount)" : nil,
                        action: onNotification
                    )
                }
            }
        }
        .padding(.horizontal, DSSpacing.pagePadding)
        .padding(.top, DSSpacing.md)
        .padding(.bottom, DSSpacing.lg)
        .background(Color.DS.black)
    }
}

// MARK: - Icon Button (used in header)
struct DSIconButton: View {
    let icon: String
    var badge: String? = nil
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            ZStack(alignment: .topTrailing) {
                Image(systemName: icon)
                    .font(.system(size: 18, weight: .regular))
                    .foregroundColor(.DS.white)
                    .frame(width: 38, height: 38)
                    .background(Color.white.opacity(0.1))
                    .clipShape(Circle())

                if let badge {
                    Text(badge)
                        .font(.system(size: 9, weight: .bold))
                        .foregroundColor(.DS.black)
                        .padding(3)
                        .background(Color.DS.accent)
                        .clipShape(Circle())
                        .offset(x: 2, y: -2)
                }
            }
        }
        .buttonStyle(.plain)
    }
}

// MARK: - Preview
#Preview {
    DSHeader(
        greeting: "Bonjour",
        name: "Sophie M.",
        onSearch: {},
        onNotification: {},
        notificationCount: 3
    )
    .background(Color.DS.black)
}

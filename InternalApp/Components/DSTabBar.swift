import SwiftUI

// MARK: - DS Tab Bar

struct DSTabItem {
    let icon: String        // SF Symbol name
    let activeIcon: String  // SF Symbol filled variant
    let label: String
}

struct DSTabBar: View {
    @Binding var selectedIndex: Int

    let items: [DSTabItem] = [
        .init(icon: "house",          activeIcon: "house.fill",          label: "Accueil"),
        .init(icon: "square.grid.2x2",activeIcon: "square.grid.2x2.fill",label: "Projets"),
        .init(icon: "person",         activeIcon: "person.fill",         label: "Profil"),
        .init(icon: "gearshape",      activeIcon: "gearshape.fill",      label: "Réglages"),
    ]

    var body: some View {
        HStack(spacing: 0) {
            ForEach(items.indices, id: \.self) { index in
                tabButton(for: items[index], index: index)
            }
        }
        .padding(.horizontal, DSSpacing.sm)
        .padding(.top, DSSpacing.md)
        .padding(.bottom, DSSpacing.xl)
        .background(Color.DS.surface)
        .overlay(
            Rectangle()
                .fill(Color.DS.neutralMid)
                .frame(height: 0.5),
            alignment: .top
        )
    }

    @ViewBuilder
    private func tabButton(for item: DSTabItem, index: Int) -> some View {
        let isActive = selectedIndex == index

        Button {
            withAnimation(.easeOut(duration: 0.15)) {
                selectedIndex = index
            }
        } label: {
            VStack(spacing: 4) {
                Image(systemName: isActive ? item.activeIcon : item.icon)
                    .font(.system(size: 22, weight: isActive ? .semibold : .regular))
                    .foregroundColor(isActive ? .DS.black : .DS.Text.muted)
                    .frame(height: 24)

                Text(item.label)
                    .font(.DS.tab)
                    .kerning(0.8)
                    .textCase(.uppercase)
                    .foregroundColor(isActive ? .DS.black : .DS.Text.muted)
                    .fontWeight(isActive ? .bold : .regular)
            }
            .frame(maxWidth: .infinity)
        }
        .buttonStyle(.plain)
    }
}

// MARK: - Preview
#Preview {
    @Previewable @State var selected = 0
    VStack {
        Spacer()
        DSTabBar(selectedIndex: $selected)
    }
    .background(Color.DS.neutralLower)
}

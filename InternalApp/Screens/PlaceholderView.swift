import SwiftUI

/// Temporary screen used for tabs not yet implemented.
/// Replace with the real screen when available.
struct PlaceholderView: View {
    let title: String
    @Binding var selectedTab: Int

    var body: some View {
        ZStack(alignment: .bottom) {
            Color.DS.neutralLower.ignoresSafeArea()

            VStack(spacing: 0) {
                // Header
                HStack {
                    Text(title)
                        .font(.DS.h1)
                        .foregroundColor(.DS.white)
                        .kerning(0.3)
                    Spacer()
                }
                .padding(.horizontal, DSSpacing.pagePadding)
                .padding(.top, DSSpacing.md)
                .padding(.bottom, DSSpacing.lg)
                .background(Color.DS.black)

                // Content
                VStack(spacing: DSSpacing.base) {
                    Spacer()
                    Image(systemName: "hammer.fill")
                        .font(.system(size: 40))
                        .foregroundColor(.DS.neutralMid)
                    Text("En cours de développement")
                        .font(.DS.body)
                        .foregroundColor(.DS.Text.muted)
                    Spacer()
                }
            }

            DSTabBar(selectedIndex: $selectedTab)
        }
        .ignoresSafeArea(edges: .bottom)
    }
}

#Preview {
    @Previewable @State var tab = 1
    PlaceholderView(title: "Projets", selectedTab: $tab)
}

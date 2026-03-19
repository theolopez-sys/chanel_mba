import SwiftUI

struct HomeView: View {
    @State private var selectedTab: Int = 0

    var body: some View {
        ZStack(alignment: .bottom) {
            // Background
            Color.DS.neutralLower.ignoresSafeArea()

            VStack(spacing: 0) {
                // Status bar area
                Color.DS.black
                    .frame(height: 0)
                    .ignoresSafeArea(edges: .top)

                // Header
                DSHeader(
                    greeting: "Bonjour",
                    name: "Sophie M.",
                    onSearch: {},
                    onNotification: {},
                    notificationCount: 2
                )

                // Scrollable content
                ScrollView(showsIndicators: false) {
                    VStack(spacing: DSSpacing.xl) {

                        // Hero card
                        DSHeroCard(
                            label: "Tableau de bord",
                            title: "Q1 2026",
                            subtitle: "Mis à jour il y a 2h",
                            action: {}
                        )
                        .padding(.top, DSSpacing.lg)

                        // Stats
                        sectionHeader(title: "Aperçu")
                        HStack(spacing: DSSpacing.md) {
                            DSStatCard(icon: "chart.line.uptrend.xyaxis", value: "247", label: "Tâches")
                            DSStatCard(icon: "person.2.fill",              value: "18",  label: "Équipe")
                            DSStatCard(icon: "star.fill",                  value: "94%", label: "Score")
                        }

                        // Quick actions
                        sectionHeader(title: "Actions rapides")
                        LazyVGrid(
                            columns: [GridItem(.flexible()), GridItem(.flexible())],
                            spacing: DSSpacing.md
                        ) {
                            DSActionCard(
                                icon: "plus",
                                title: "Nouvelle tâche",
                                subtitle: "Créer & assigner",
                                isDark: true,
                                action: {}
                            )
                            DSActionCard(
                                icon: "calendar",
                                title: "Planifier",
                                subtitle: "3 événements ce soir",
                                action: {}
                            )
                            DSActionCard(
                                icon: "message.fill",
                                title: "Messages",
                                subtitle: "5 non lus",
                                action: {}
                            )
                            DSActionCard(
                                icon: "doc.text.fill",
                                title: "Rapports",
                                subtitle: "Exporter les données",
                                action: {}
                            )
                        }

                        // Activity
                        sectionHeader(title: "Activité récente", linkTitle: "Tout voir")
                        DSActivityList(items: sampleActivity)

                        // Bottom safe area padding
                        Spacer().frame(height: 80)
                    }
                    .padding(.horizontal, DSSpacing.pagePadding)
                }
            }

            // Tab bar
            DSTabBar(selectedIndex: $selectedTab)
        }
        .ignoresSafeArea(edges: .bottom)
    }

    // MARK: - Section header
    @ViewBuilder
    private func sectionHeader(title: String, linkTitle: String? = nil) -> some View {
        HStack {
            Text(title)
                .dsLabel()
            Spacer()
            if let linkTitle {
                HStack(spacing: 2) {
                    Text(linkTitle)
                        .dsLabel()
                    Image(systemName: "chevron.right")
                        .font(.system(size: 10, weight: .bold))
                        .foregroundColor(.DS.Text.muted)
                }
            }
        }
    }

    // MARK: - Sample data
    private var sampleActivity: [DSActivityItemModel] {
        [
            .init(initials: "AL", name: "Alice Laurent",
                  description: "A validé le rapport mensuel", time: "09:14",
                  badge: .init(text: "New", variant: .accent)),
            .init(initials: "TM", name: "Thomas M.",
                  description: "A mis à jour le projet Q1", time: "08:52"),
            .init(initials: "CR", name: "Clara R.",
                  description: "Nouvelle demande d'accès", time: "08:30",
                  badge: .init(text: "!", variant: .dark)),
            .init(initials: "JP", name: "Jean-Pierre B.",
                  description: "Commentaire sur Tâche #482", time: "Hier"),
        ]
    }
}

#Preview {
    HomeView()
}

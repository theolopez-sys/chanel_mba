import SwiftUI

struct HomeView: View {
    @Binding var selectedTab: Int
    @State private var selectedSegment: Int = 0

    var body: some View {
        ZStack(alignment: .bottom) {
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
                    notificationCount: 3
                )

                // Scrollable content
                ScrollView(showsIndicators: false) {
                    VStack(spacing: DSSpacing.xl) {

                        // Hero card — today's objective
                        DSHeroCard(
                            label: "Objectif du jour",
                            title: "Clienteling",
                            subtitle: "15 Avril 2026 · Boutique Paris 8",
                            ctaTitle: "Voir tout",
                            action: {}
                        )
                        .padding(.top, DSSpacing.lg)

                        // Today's KPIs
                        sectionHeader(title: "Aujourd'hui")
                        HStack(spacing: DSSpacing.md) {
                            DSStatCard(
                                icon: "person.2.fill",
                                value: "12",
                                label: "Clients"
                            )
                            DSStatCard(
                                icon: "calendar.badge.clock",
                                value: "4",
                                label: "Rendez-vous"
                            )
                            DSStatCard(
                                icon: "eurosign",
                                value: "24k",
                                label: "CA estimé"
                            )
                        }

                        // Featured client card
                        sectionHeader(title: "Client prioritaire")
                        featuredClientCard

                        // Quick actions
                        sectionHeader(title: "Actions rapides")
                        LazyVGrid(
                            columns: [GridItem(.flexible()), GridItem(.flexible())],
                            spacing: DSSpacing.md
                        ) {
                            DSActionCard(
                                icon: "person.badge.plus",
                                title: "Nouveau client",
                                subtitle: "Créer une fiche",
                                isDark: true,
                                action: {}
                            )
                            DSActionCard(
                                icon: "calendar.badge.plus",
                                title: "Prendre RDV",
                                subtitle: "4 créneaux disponibles",
                                action: {}
                            )
                            DSActionCard(
                                icon: "message.fill",
                                title: "Envoyer un message",
                                subtitle: "6 conversations actives",
                                action: {}
                            )
                            DSActionCard(
                                icon: "bag.fill",
                                title: "Catalogue",
                                subtitle: "Nouvelles références",
                                action: {}
                            )
                        }

                        // Upcoming appointments
                        sectionHeader(title: "Rendez-vous du jour", linkTitle: "Agenda")
                        appointmentList

                        // Recent activity
                        sectionHeader(title: "Activité récente", linkTitle: "Tout voir")
                        DSActivityList(items: sampleActivity)

                        // Bottom safe area
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

    // MARK: - Featured client card

    private var featuredClientCard: some View {
        DSCard(isDark: false, padding: DSSpacing.lg) {
            HStack(spacing: DSSpacing.base) {
                // Avatar
                ZStack {
                    Circle()
                        .fill(Color.DS.neutralLower)
                        .frame(width: 52, height: 52)
                    Text("MR")
                        .font(.DS.bodyLg)
                        .fontWeight(.semibold)
                        .foregroundColor(.DS.Text.heading)
                }

                // Client info
                VStack(alignment: .leading, spacing: 4) {
                    HStack(spacing: DSSpacing.sm) {
                        Text("Marie R.")
                            .font(.DS.body)
                            .fontWeight(.semibold)
                            .foregroundColor(.DS.Text.heading)
                        DSBadge(text: "VIP", variant: .accent)
                    }
                    Text("Anniversaire dans 3 jours · RDV à 14h30")
                        .font(.DS.bodySm)
                        .foregroundColor(.DS.Text.muted)
                        .lineLimit(1)
                    Text("Intérêt: Haute Joaillerie, Sacs")
                        .font(.DS.micro)
                        .foregroundColor(.DS.Text.muted)
                }
                .frame(maxWidth: .infinity, alignment: .leading)

                Image(systemName: "chevron.right")
                    .font(.system(size: 12, weight: .semibold))
                    .foregroundColor(.DS.Text.muted)
            }

            Divider()
                .padding(.vertical, DSSpacing.md)

            HStack(spacing: DSSpacing.md) {
                DSButton(title: "Message", variant: .secondary, icon: "message", action: {})
                DSButton(title: "Fiche client", variant: .primary, icon: "person.fill", action: {})
            }
        }
    }

    // MARK: - Appointment list

    private var appointmentList: some View {
        VStack(spacing: 1) {
            ForEach(sampleAppointments.indices, id: \.self) { index in
                let item = sampleAppointments[index]
                appointmentRow(item: item)
                    .cornerRadius(index == 0 ? DSRadius.md : 0,
                                  corners: [.topLeft, .topRight])
                    .cornerRadius(index == sampleAppointments.count - 1 ? DSRadius.md : 0,
                                  corners: [.bottomLeft, .bottomRight])
            }
        }
        .background(Color.DS.neutralMid)
        .cornerRadius(DSRadius.md)
        .dsShadow(.card)
    }

    @ViewBuilder
    private func appointmentRow(item: AppointmentItem) -> some View {
        HStack(spacing: DSSpacing.base) {
            // Time column
            VStack(spacing: 2) {
                Text(item.time)
                    .font(.DS.bodySm)
                    .fontWeight(.semibold)
                    .foregroundColor(.DS.Text.heading)
                Text(item.duration)
                    .font(.DS.micro)
                    .foregroundColor(.DS.Text.muted)
            }
            .frame(width: 48)

            // Separator
            Rectangle()
                .fill(Color.DS.neutralMid)
                .frame(width: 1)
                .padding(.vertical, DSSpacing.sm)

            // Client info
            VStack(alignment: .leading, spacing: 3) {
                Text(item.clientName)
                    .font(.DS.bodySm)
                    .fontWeight(.semibold)
                    .foregroundColor(.DS.Text.heading)
                    .lineLimit(1)
                Text(item.type)
                    .font(.DS.micro)
                    .foregroundColor(.DS.Text.muted)
                    .lineLimit(1)
            }
            .frame(maxWidth: .infinity, alignment: .leading)

            DSBadge(text: item.status, variant: item.badgeVariant)
        }
        .padding(.horizontal, DSSpacing.lg)
        .padding(.vertical, DSSpacing.md)
        .background(Color.DS.surface)
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
            .init(initials: "MR", name: "Marie R.",
                  description: "A confirmé le RDV du 15 avril", time: "10:02",
                  badge: .init(text: "RDV", variant: .accent)),
            .init(initials: "PD", name: "Pierre D.",
                  description: "Commande Sac 2.55 · 6 850 €", time: "09:47",
                  badge: .init(text: "Vente", variant: .dark)),
            .init(initials: "CS", name: "Claire S.",
                  description: "Anniversaire demain", time: "09:15",
                  badge: .init(text: "!", variant: .neutral)),
            .init(initials: "AL", name: "Antoine L.",
                  description: "Message non lu", time: "Hier"),
        ]
    }

    private var sampleAppointments: [AppointmentItem] {
        [
            .init(time: "11:00", duration: "30 min", clientName: "Isabelle F.",
                  type: "Défilé Automne · Haute Couture", status: "Confirmé", badgeVariant: .accent),
            .init(time: "14:30", duration: "45 min", clientName: "Marie R.",
                  type: "Présentation Joaillerie", status: "À venir", badgeVariant: .neutral),
            .init(time: "16:00", duration: "30 min", clientName: "Jean-Luc B.",
                  type: "Retrait commande", status: "En attente", badgeVariant: .outlined),
        ]
    }
}

// MARK: - Appointment model

private struct AppointmentItem {
    let time: String
    let duration: String
    let clientName: String
    let type: String
    let status: String
    let badgeVariant: DSBadgeVariant
}

#Preview {
    @Previewable @State var tab = 0
    HomeView(selectedTab: $tab)
}

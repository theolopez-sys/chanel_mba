import SwiftUI

struct ProfileView: View {
    @Binding var selectedTab: Int

    var body: some View {
        NavigationStack {
            ZStack(alignment: .bottom) {
                Color.DS.neutralLower.ignoresSafeArea()

                VStack(spacing: 0) {
                    // Header
                    profileHeader

                    // Scrollable content
                    ScrollView(showsIndicators: false) {
                        VStack(spacing: DSSpacing.xl) {

                            // Profile card
                            profileCard

                            // Stats
                            sectionHeader(title: "Statistiques")
                            HStack(spacing: DSSpacing.md) {
                                DSStatCard(icon: "checkmark.circle.fill", value: "183", label: "Tâches")
                                DSStatCard(icon: "folder.fill",           value: "12",  label: "Projets")
                                DSStatCard(icon: "star.fill",             value: "94%", label: "Score")
                            }

                            // Parcours
                            sectionHeader(title: "Mes parcours", linkTitle: "Tout voir")
                            parcoursSection

                            // Account settings
                            sectionHeader(title: "Compte")
                            accountSection

                            // Sign out
                            DSButton(
                                title: "Se déconnecter",
                                variant: .secondary,
                                icon: "rectangle.portrait.and.arrow.right",
                                isFullWidth: true,
                                action: {}
                            )

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
            .toolbar(.hidden, for: .navigationBar)
            .navigationDestination(for: ParcourModel.self) { parcours in
                ParcourDetailView(parcours: parcours)
            }
        }
    }

    // MARK: - Header

    private var profileHeader: some View {
        HStack(alignment: .bottom) {
            VStack(alignment: .leading, spacing: 2) {
                Text("Mon compte")
                    .font(.DS.micro)
                    .kerning(1.5)
                    .textCase(.uppercase)
                    .foregroundColor(.white.opacity(0.5))

                Text("Profil")
                    .font(.DS.h1)
                    .foregroundColor(.DS.white)
                    .kerning(0.3)
            }

            Spacer()

            DSIconButton(icon: "pencil", action: {})
        }
        .padding(.horizontal, DSSpacing.pagePadding)
        .padding(.top, DSSpacing.md)
        .padding(.bottom, DSSpacing.lg)
        .background(Color.DS.black)
    }

    // MARK: - Profile Card

    private var profileCard: some View {
        DSCard(isDark: true) {
            VStack(spacing: DSSpacing.xl) {
                HStack(spacing: DSSpacing.base) {
                    // Avatar
                    ZStack {
                        Circle()
                            .fill(Color.white.opacity(0.12))
                            .frame(width: 64, height: 64)
                        Text("SM")
                            .font(.DS.h2)
                            .foregroundColor(.DS.white)
                    }

                    VStack(alignment: .leading, spacing: DSSpacing.xs) {
                        Text("Sophie Martin")
                            .font(.DS.h3)
                            .foregroundColor(.DS.white)

                        Text("Directrice de programme")
                            .font(.DS.bodySm)
                            .foregroundColor(.white.opacity(0.55))

                        DSBadge(text: "Admin", variant: .accent)
                    }

                    Spacer()
                }

                // Edit profile button — secondaryInverted for dark card background
                DSButton(title: "Modifier le profil", variant: .secondaryInverted, isFullWidth: true, action: {})
            }
        }
        .padding(.top, DSSpacing.lg)
    }

    // MARK: - Parcours Section

    private var parcoursSection: some View {
        VStack(spacing: DSSpacing.md) {
            ForEach(ParcourModel.sampleParcours) { parcours in
                NavigationLink(value: parcours) {
                    parcourCard(parcours)
                }
                .buttonStyle(.plain)
            }
        }
    }

    @ViewBuilder
    private func parcourCard(_ parcours: ParcourModel) -> some View {
        DSCard {
            VStack(alignment: .leading, spacing: DSSpacing.md) {
                // Top row: icon + info + badge
                HStack(spacing: DSSpacing.base) {
                    ZStack {
                        RoundedRectangle(cornerRadius: DSRadius.sm)
                            .fill(Color.DS.neutralLower)
                            .frame(width: 44, height: 44)
                        Image(systemName: parcours.icon)
                            .font(.system(size: 18, weight: .medium))
                            .foregroundColor(.DS.Text.body)
                    }

                    VStack(alignment: .leading, spacing: 3) {
                        Text(parcours.title)
                            .font(.DS.bodySm)
                            .fontWeight(.semibold)
                            .foregroundColor(.DS.Text.heading)
                            .lineLimit(1)

                        Text(parcours.category)
                            .font(.DS.micro)
                            .foregroundColor(.DS.Text.muted)
                    }

                    Spacer()

                    DSBadge(text: parcours.status.label, variant: parcours.status.badgeVariant)
                }

                // Progress bar + percentage
                VStack(alignment: .leading, spacing: DSSpacing.xs) {
                    GeometryReader { geo in
                        ZStack(alignment: .leading) {
                            RoundedRectangle(cornerRadius: DSRadius.full)
                                .fill(Color.DS.neutralLower)
                                .frame(height: 4)

                            RoundedRectangle(cornerRadius: DSRadius.full)
                                .fill(Color.DS.black)
                                .frame(width: geo.size.width * parcours.progress, height: 4)
                        }
                    }
                    .frame(height: 4)

                    HStack {
                        Text("\(parcours.completedModules)/\(parcours.modules.count) modules")
                            .font(.DS.micro)
                            .foregroundColor(.DS.Text.muted)
                        Spacer()
                        Text("\(Int(parcours.progress * 100))%")
                            .font(.DS.micro)
                            .fontWeight(.bold)
                            .foregroundColor(.DS.Text.heading)
                    }
                }
            }
        }
    }

    // MARK: - Account Section

    private var accountSection: some View {
        DSCard(padding: 0) {
            VStack(spacing: 0) {
                accountRow(icon: "person.fill",             title: "Informations personnelles")
                Divider().background(Color.DS.neutralMid).padding(.leading, 64)
                accountRow(icon: "bell.fill",               title: "Notifications")
                Divider().background(Color.DS.neutralMid).padding(.leading, 64)
                accountRow(icon: "lock.fill",               title: "Confidentialité")
                Divider().background(Color.DS.neutralMid).padding(.leading, 64)
                accountRow(icon: "questionmark.circle.fill", title: "Aide & support", badge: "Nouveau")
            }
        }
    }

    @ViewBuilder
    private func accountRow(icon: String, title: String, badge: String? = nil) -> some View {
        HStack(spacing: DSSpacing.base) {
            ZStack {
                RoundedRectangle(cornerRadius: DSRadius.sm)
                    .fill(Color.DS.neutralLower)
                    .frame(width: 36, height: 36)
                Image(systemName: icon)
                    .font(.system(size: 15, weight: .medium))
                    .foregroundColor(.DS.Text.body)
            }

            Text(title)
                .font(.DS.body)
                .foregroundColor(.DS.Text.heading)

            Spacer()

            if let badge {
                DSBadge(text: badge, variant: .accent)
            }

            Image(systemName: "chevron.right")
                .font(.system(size: 12, weight: .semibold))
                .foregroundColor(.DS.Text.muted)
        }
        .padding(.horizontal, DSSpacing.base)
        .padding(.vertical, DSSpacing.md)
        .frame(minHeight: 56)
        .contentShape(Rectangle())
    }

    // MARK: - Section Header

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
}

// MARK: - Preview

#Preview {
    @Previewable @State var tab = 2
    ProfileView(selectedTab: $tab)
}

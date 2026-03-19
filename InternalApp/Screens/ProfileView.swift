import SwiftUI

struct ProfileView: View {
    @Binding var selectedTab: Int

    var body: some View {
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

                // Edit profile button
                DSButton(title: "Modifier le profil", variant: .secondary, isFullWidth: true, action: {})
                    .overlay(
                        RoundedRectangle(cornerRadius: DSRadius.full)
                            .strokeBorder(Color.white.opacity(0.3), lineWidth: 1)
                    )
                    .foregroundColor(.DS.white)
            }
        }
        .padding(.top, DSSpacing.lg)
    }

    // MARK: - Account Section

    private var accountSection: some View {
        DSCard(padding: 0) {
            VStack(spacing: 0) {
                accountRow(icon: "person.fill",            title: "Informations personnelles")
                Divider().background(Color.DS.neutralMid).padding(.leading, 64)
                accountRow(icon: "bell.fill",              title: "Notifications")
                Divider().background(Color.DS.neutralMid).padding(.leading, 64)
                accountRow(icon: "lock.fill",              title: "Confidentialité")
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
    }

    // MARK: - Section Header

    @ViewBuilder
    private func sectionHeader(title: String) -> some View {
        HStack {
            Text(title)
                .dsLabel()
            Spacer()
        }
    }
}

// MARK: - Preview

#Preview {
    @Previewable @State var tab = 2
    ProfileView(selectedTab: $tab)
}

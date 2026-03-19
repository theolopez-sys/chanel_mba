import SwiftUI

// MARK: - DS Card (surface container)

struct DSCard<Content: View>: View {
    var isDark: Bool = false
    var padding: CGFloat = DSSpacing.xl
    @ViewBuilder let content: () -> Content

    var body: some View {
        content()
            .padding(padding)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(isDark ? Color.DS.black : Color.DS.surface)
            .cornerRadius(DSRadius.lg)
            .dsShadow(.card)
    }
}

// MARK: - DS Hero Card
struct DSHeroCard: View {
    let label: String
    let title: String
    let subtitle: String
    var ctaTitle: String = "Voir tout"
    var action: (() -> Void)? = nil

    var body: some View {
        ZStack(alignment: .topLeading) {
            // Background
            Color.DS.black

            // Subtle diagonal pattern
            Canvas { ctx, size in
                let spacing: CGFloat = 12
                var x: CGFloat = -size.height
                while x < size.width + size.height {
                    var path = Path()
                    path.move(to: CGPoint(x: x, y: 0))
                    path.addLine(to: CGPoint(x: x + size.height, y: size.height))
                    ctx.stroke(path, with: .color(.white.opacity(0.04)), lineWidth: 1)
                    x += spacing
                }
            }

            VStack(alignment: .leading, spacing: 0) {
                // Label
                Text(label)
                    .font(.DS.micro)
                    .kerning(2)
                    .textCase(.uppercase)
                    .foregroundColor(.DS.accent)

                Spacer()

                // Title
                Text(title)
                    .font(.DS.hero)
                    .foregroundColor(.DS.white)
                    .lineLimit(2)

                Spacer()

                // Footer
                HStack(alignment: .bottom) {
                    Text(subtitle)
                        .font(.DS.micro)
                        .kerning(1)
                        .textCase(.uppercase)
                        .foregroundColor(.white.opacity(0.45))

                    Spacer()

                    if let action {
                        Button(action: action) {
                            Text(ctaTitle)
                                .font(.DS.micro)
                                .kerning(1)
                                .textCase(.uppercase)
                                .foregroundColor(.DS.black)
                                .padding(.horizontal, DSSpacing.base)
                                .padding(.vertical, 8)
                                .background(Color.DS.white)
                                .cornerRadius(DSRadius.full)
                        }
                        .buttonStyle(.plain)
                    }
                }
            }
            .padding(DSSpacing.xl)
        }
        .frame(height: 200)
        .cornerRadius(DSRadius.lg)
    }
}

// MARK: - DS Stat Card
struct DSStatCard: View {
    let icon: String   // SF Symbol
    let value: String
    let label: String

    var body: some View {
        VStack(alignment: .leading, spacing: DSSpacing.sm) {
            ZStack {
                RoundedRectangle(cornerRadius: DSRadius.sm)
                    .fill(Color.DS.neutralLower)
                    .frame(width: 36, height: 36)
                Image(systemName: icon)
                    .font(.system(size: 16, weight: .medium))
                    .foregroundColor(.DS.Text.body)
            }

            Text(value)
                .font(.DS.h2)
                .foregroundColor(.DS.Text.heading)

            Text(label)
                .dsLabel()
        }
        .padding(DSSpacing.base)
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(Color.DS.surface)
        .cornerRadius(DSRadius.md)
        .dsShadow(.card)
    }
}

// MARK: - DS Action Card
struct DSActionCard: View {
    let icon: String
    let title: String
    let subtitle: String
    var isDark: Bool = false
    var action: (() -> Void)? = nil

    var body: some View {
        Button(action: { action?() }) {
            VStack(alignment: .leading, spacing: DSSpacing.md) {
                ZStack {
                    RoundedRectangle(cornerRadius: DSRadius.sm)
                        .fill(isDark ? Color.white.opacity(0.1) : Color.DS.neutralLower)
                        .frame(width: 44, height: 44)
                    Image(systemName: icon)
                        .font(.system(size: 18, weight: .medium))
                        .foregroundColor(isDark ? .DS.white : .DS.Text.body)
                }

                VStack(alignment: .leading, spacing: 3) {
                    Text(title)
                        .font(.DS.bodySm)
                        .fontWeight(.semibold)
                        .foregroundColor(isDark ? .DS.white : .DS.Text.heading)
                        .lineLimit(2)
                        .fixedSize(horizontal: false, vertical: true)

                    Text(subtitle)
                        .font(.DS.micro)
                        .foregroundColor(isDark ? .white.opacity(0.4) : .DS.Text.muted)
                }
            }
            .padding(DSSpacing.lg)
            .frame(maxWidth: .infinity, alignment: .leading)
            .background(isDark ? Color.DS.black : Color.DS.surface)
            .cornerRadius(DSRadius.md)
            .dsShadow(.card)
        }
        .buttonStyle(.plain)
    }
}

// MARK: - Previews
#Preview("Cards") {
    ScrollView {
        VStack(spacing: DSSpacing.lg) {
            DSHeroCard(
                label: "Tableau de bord",
                title: "Q1 2026",
                subtitle: "Mis à jour il y a 2h",
                action: {}
            )

            HStack(spacing: DSSpacing.md) {
                DSStatCard(icon: "chart.line.uptrend.xyaxis", value: "247", label: "Tâches")
                DSStatCard(icon: "person.2.fill", value: "18", label: "Équipe")
                DSStatCard(icon: "star.fill", value: "94%", label: "Score")
            }

            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: DSSpacing.md) {
                DSActionCard(icon: "plus", title: "Nouvelle tâche", subtitle: "Créer & assigner", isDark: true)
                DSActionCard(icon: "calendar", title: "Planifier", subtitle: "3 événements ce soir")
                DSActionCard(icon: "message.fill", title: "Messages", subtitle: "5 non lus")
                DSActionCard(icon: "doc.text.fill", title: "Rapports", subtitle: "Exporter les données")
            }
        }
        .padding(DSSpacing.pagePadding)
    }
    .background(Color.DS.neutralLower)
}

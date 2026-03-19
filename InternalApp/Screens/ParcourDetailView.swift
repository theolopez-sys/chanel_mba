import SwiftUI

// MARK: - Models

enum ParcourStatus {
    case completed, inProgress, notStarted

    var label: String {
        switch self {
        case .completed:   return "Terminé"
        case .inProgress:  return "En cours"
        case .notStarted:  return "À commencer"
        }
    }

    var badgeVariant: DSBadgeVariant {
        switch self {
        case .completed:   return .dark
        case .inProgress:  return .accent
        case .notStarted:  return .neutral
        }
    }
}

enum ModuleStatus {
    case completed, current, locked

    var icon: String {
        switch self {
        case .completed: return "checkmark.circle.fill"
        case .current:   return "play.circle.fill"
        case .locked:    return "lock.circle"
        }
    }

    var iconColor: Color {
        switch self {
        case .completed: return .DS.Text.heading
        case .current:   return .DS.accent
        case .locked:    return .DS.Text.muted
        }
    }
}

struct ParcourModule: Identifiable, Hashable {
    let id: UUID
    let title: String
    let duration: String
    let status: ModuleStatus

    static func == (lhs: Self, rhs: Self) -> Bool { lhs.id == rhs.id }
    func hash(into hasher: inout Hasher) { hasher.combine(id) }
}

struct ParcourModel: Identifiable, Hashable {
    let id: UUID
    let title: String
    let category: String
    let description: String
    let icon: String
    let progress: Double        // 0.0 – 1.0
    let status: ParcourStatus
    let totalHours: String
    let modules: [ParcourModule]

    var completedModules: Int { modules.filter { $0.status == .completed }.count }

    static func == (lhs: Self, rhs: Self) -> Bool { lhs.id == rhs.id }
    func hash(into hasher: inout Hasher) { hasher.combine(id) }
}

// MARK: - Sample Data

extension ParcourModel {
    static let sampleParcours: [ParcourModel] = [
        ParcourModel(
            id: UUID(),
            title: "Leadership & Management",
            category: "Développement personnel",
            description: "Développer son style de leadership et piloter des équipes multiculturelless.",
            icon: "person.3.fill",
            progress: 0.67,
            status: .inProgress,
            totalHours: "32h",
            modules: [
                .init(id: UUID(), title: "Fondamentaux du leadership", duration: "3h", status: .completed),
                .init(id: UUID(), title: "Communication stratégique",  duration: "4h", status: .completed),
                .init(id: UUID(), title: "Gestion de la performance",  duration: "3h30", status: .completed),
                .init(id: UUID(), title: "Conduite du changement",      duration: "4h", status: .completed),
                .init(id: UUID(), title: "Intelligence émotionnelle",   duration: "3h", status: .completed),
                .init(id: UUID(), title: "Délégation & responsabilisation", duration: "3h30", status: .completed),
                .init(id: UUID(), title: "Leadership en contexte de crise", duration: "4h", status: .current),
                .init(id: UUID(), title: "Diversité & inclusion",      duration: "3h", status: .locked),
                .init(id: UUID(), title: "Évaluation finale",           duration: "4h", status: .locked),
            ]
        ),
        ParcourModel(
            id: UUID(),
            title: "Finance & Stratégie",
            category: "Compétences métier",
            description: "Maîtriser les outils financiers pour prendre des décisions stratégiques éclairées.",
            icon: "chart.line.uptrend.xyaxis",
            progress: 1.0,
            status: .completed,
            totalHours: "28h",
            modules: [
                .init(id: UUID(), title: "Lecture des états financiers", duration: "4h", status: .completed),
                .init(id: UUID(), title: "Analyse de rentabilité",        duration: "3h30", status: .completed),
                .init(id: UUID(), title: "Budget & prévisions",           duration: "4h", status: .completed),
                .init(id: UUID(), title: "Stratégie d'investissement",    duration: "3h", status: .completed),
                .init(id: UUID(), title: "Pricing & valeur perçue",       duration: "4h", status: .completed),
                .init(id: UUID(), title: "Plan stratégique à 3 ans",      duration: "4h", status: .completed),
                .init(id: UUID(), title: "Certification finale",           duration: "5h30", status: .completed),
            ]
        ),
        ParcourModel(
            id: UUID(),
            title: "Brand & Luxe",
            category: "Marketing",
            description: "Comprendre les codes du luxe et développer une vision de marque cohérente.",
            icon: "sparkles",
            progress: 0.30,
            status: .inProgress,
            totalHours: "36h",
            modules: [
                .init(id: UUID(), title: "Histoire et codes du luxe",     duration: "3h", status: .completed),
                .init(id: UUID(), title: "Architecture de marque",         duration: "4h", status: .completed),
                .init(id: UUID(), title: "Storytelling & narration",       duration: "3h30", status: .completed),
                .init(id: UUID(), title: "Expérience client premium",      duration: "4h", status: .current),
                .init(id: UUID(), title: "Digital & omnicanal",            duration: "4h", status: .locked),
                .init(id: UUID(), title: "Retail & visual merchandising",  duration: "3h30", status: .locked),
                .init(id: UUID(), title: "Influence & relations presse",   duration: "3h", status: .locked),
                .init(id: UUID(), title: "Durabilité de la marque",        duration: "4h", status: .locked),
                .init(id: UUID(), title: "Gestion de crise d'image",       duration: "3h", status: .locked),
                .init(id: UUID(), title: "Étude de cas & certification",   duration: "4h", status: .locked),
            ]
        ),
        ParcourModel(
            id: UUID(),
            title: "Innovation & Digital",
            category: "Transformation",
            description: "Piloter la transformation digitale et intégrer les nouvelles technologies.",
            icon: "cpu",
            progress: 0.0,
            status: .notStarted,
            totalHours: "30h",
            modules: [
                .init(id: UUID(), title: "Culture de l'innovation",        duration: "3h30", status: .locked),
                .init(id: UUID(), title: "Design thinking",                duration: "4h", status: .locked),
                .init(id: UUID(), title: "Agilité & organisation",         duration: "3h", status: .locked),
                .init(id: UUID(), title: "Data & intelligence artificielle", duration: "4h", status: .locked),
                .init(id: UUID(), title: "Transformation des usages",      duration: "3h30", status: .locked),
                .init(id: UUID(), title: "Cybersécurité & gouvernance",    duration: "3h", status: .locked),
                .init(id: UUID(), title: "Nouvelles formes de travail",    duration: "4h", status: .locked),
                .init(id: UUID(), title: "Projet final : feuille de route", duration: "5h", status: .locked),
            ]
        ),
    ]
}

// MARK: - Parcours Detail View

struct ParcourDetailView: View {
    let parcours: ParcourModel
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        ZStack(alignment: .top) {
            Color.DS.neutralLower.ignoresSafeArea()

            VStack(spacing: 0) {
                detailHeader
                ScrollView(showsIndicators: false) {
                    VStack(spacing: DSSpacing.xl) {

                        // Hero progress card
                        heroCard
                            .padding(.top, DSSpacing.lg)

                        // Stats
                        sectionHeader("Progression")
                        HStack(spacing: DSSpacing.md) {
                            DSStatCard(
                                icon: "checkmark.circle.fill",
                                value: "\(parcours.completedModules)/\(parcours.modules.count)",
                                label: "Modules"
                            )
                            DSStatCard(
                                icon: "clock.fill",
                                value: parcours.totalHours,
                                label: "Durée"
                            )
                            DSStatCard(
                                icon: "star.fill",
                                value: parcours.progress < 1 ? "\(Int(parcours.progress * 100))%" : "100%",
                                label: "Avancement"
                            )
                        }

                        // Modules list
                        sectionHeader("Modules")
                        modulesSection

                        // CTA
                        if parcours.status != .completed {
                            DSButton(
                                title: parcours.status == .notStarted ? "Commencer le parcours" : "Reprendre",
                                variant: .primary,
                                icon: parcours.status == .notStarted ? "play.fill" : "arrow.right",
                                isFullWidth: true,
                                action: {}
                            )
                        }

                        Spacer().frame(height: DSSpacing.xxxl)
                    }
                    .padding(.horizontal, DSSpacing.pagePadding)
                }
            }
        }
        .toolbar(.hidden, for: .navigationBar)
    }

    // MARK: - Detail Header

    private var detailHeader: some View {
        HStack(spacing: DSSpacing.md) {
            Button {
                dismiss()
            } label: {
                ZStack {
                    Circle()
                        .fill(Color.white.opacity(0.1))
                        .frame(width: 38, height: 38)
                    Image(systemName: "chevron.left")
                        .font(.system(size: 16, weight: .semibold))
                        .foregroundColor(.DS.white)
                }
            }
            .buttonStyle(.plain)

            Spacer()

            VStack(spacing: 2) {
                Text(parcours.category)
                    .font(.DS.micro)
                    .kerning(1.5)
                    .textCase(.uppercase)
                    .foregroundColor(.white.opacity(0.5))

                Text(parcours.title)
                    .font(.DS.h1)
                    .foregroundColor(.DS.white)
                    .kerning(0.3)
                    .lineLimit(1)
            }

            Spacer()

            // Placeholder for symmetry
            Color.clear.frame(width: 38, height: 38)
        }
        .padding(.horizontal, DSSpacing.pagePadding)
        .padding(.top, DSSpacing.md)
        .padding(.bottom, DSSpacing.lg)
        .background(Color.DS.black)
    }

    // MARK: - Hero Card

    private var heroCard: some View {
        DSCard(isDark: true) {
            VStack(alignment: .leading, spacing: DSSpacing.lg) {
                // Icon + title
                HStack(spacing: DSSpacing.base) {
                    ZStack {
                        RoundedRectangle(cornerRadius: DSRadius.sm)
                            .fill(Color.white.opacity(0.1))
                            .frame(width: 48, height: 48)
                        Image(systemName: parcours.icon)
                            .font(.system(size: 20, weight: .medium))
                            .foregroundColor(.DS.white)
                    }

                    VStack(alignment: .leading, spacing: DSSpacing.xs) {
                        Text(parcours.title)
                            .font(.DS.h3)
                            .foregroundColor(.DS.white)
                        Text(parcours.description)
                            .font(.DS.bodySm)
                            .foregroundColor(.white.opacity(0.55))
                            .lineLimit(2)
                    }
                }

                // Progress bar
                VStack(alignment: .leading, spacing: DSSpacing.sm) {
                    HStack {
                        Text("Progression")
                            .font(.DS.micro)
                            .kerning(1.5)
                            .textCase(.uppercase)
                            .foregroundColor(.white.opacity(0.45))
                        Spacer()
                        DSBadge(text: parcours.status.label, variant: parcours.status.badgeVariant)
                    }

                    GeometryReader { geo in
                        ZStack(alignment: .leading) {
                            RoundedRectangle(cornerRadius: DSRadius.full)
                                .fill(Color.white.opacity(0.12))
                                .frame(height: 6)

                            RoundedRectangle(cornerRadius: DSRadius.full)
                                .fill(Color.DS.white)
                                .frame(width: geo.size.width * parcours.progress, height: 6)
                        }
                    }
                    .frame(height: 6)

                    Text("\(Int(parcours.progress * 100))% complété · \(parcours.completedModules)/\(parcours.modules.count) modules")
                        .font(.DS.micro)
                        .foregroundColor(.white.opacity(0.45))
                }
            }
        }
    }

    // MARK: - Modules Section

    private var modulesSection: some View {
        DSCard(padding: 0) {
            VStack(spacing: 0) {
                ForEach(Array(parcours.modules.enumerated()), id: \.element.id) { index, module in
                    moduleRow(module, isLast: index == parcours.modules.count - 1)
                    if index < parcours.modules.count - 1 {
                        Divider()
                            .background(Color.DS.neutralMid)
                            .padding(.leading, 68)
                    }
                }
            }
        }
    }

    @ViewBuilder
    private func moduleRow(_ module: ParcourModule, isLast: Bool) -> some View {
        HStack(spacing: DSSpacing.base) {
            // Status icon
            ZStack {
                Circle()
                    .fill(module.status == .completed ? Color.DS.neutralLower : Color.DS.neutralLower)
                    .frame(width: 36, height: 36)
                Image(systemName: module.status.icon)
                    .font(.system(size: 18, weight: .medium))
                    .foregroundColor(module.status.iconColor)
            }

            VStack(alignment: .leading, spacing: 2) {
                Text(module.title)
                    .font(.DS.bodySm)
                    .fontWeight(module.status == .current ? .semibold : .regular)
                    .foregroundColor(module.status == .locked ? .DS.Text.muted : .DS.Text.heading)

                Text(module.duration)
                    .font(.DS.micro)
                    .foregroundColor(.DS.Text.muted)
            }

            Spacer()

            if module.status == .current {
                DSBadge(text: "En cours", variant: .accent)
            }
        }
        .padding(.horizontal, DSSpacing.base)
        .padding(.vertical, DSSpacing.md)
        .frame(minHeight: 56)
    }

    // MARK: - Section Header

    @ViewBuilder
    private func sectionHeader(_ title: String) -> some View {
        HStack {
            Text(title)
                .dsLabel()
            Spacer()
        }
    }
}

// MARK: - Preview

#Preview {
    ParcourDetailView(parcours: ParcourModel.sampleParcours[0])
}

#Preview("Terminé") {
    ParcourDetailView(parcours: ParcourModel.sampleParcours[1])
}

#Preview("Non commencé") {
    ParcourDetailView(parcours: ParcourModel.sampleParcours[3])
}

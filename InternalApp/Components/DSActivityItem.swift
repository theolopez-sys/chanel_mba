import SwiftUI

// MARK: - DS Activity / List Item

struct DSActivityItem: View {
    let initials: String
    let name: String
    let description: String
    let time: String
    var badge: DSBadgeData? = nil

    struct DSBadgeData {
        let text: String
        let variant: DSBadgeVariant
    }

    var body: some View {
        HStack(spacing: DSSpacing.base) {
            // Avatar
            ZStack {
                Circle()
                    .fill(Color.DS.neutralLower)
                    .frame(width: 44, height: 44)
                Text(initials)
                    .font(.DS.bodySm)
                    .fontWeight(.semibold)
                    .foregroundColor(.DS.Text.heading)
            }

            // Info
            VStack(alignment: .leading, spacing: 3) {
                Text(name)
                    .font(.DS.bodySm)
                    .fontWeight(.semibold)
                    .foregroundColor(.DS.Text.heading)
                    .lineLimit(1)

                Text(description)
                    .font(.DS.micro)
                    .foregroundColor(.DS.Text.muted)
                    .lineLimit(1)
            }
            .frame(maxWidth: .infinity, alignment: .leading)

            // Meta
            VStack(alignment: .trailing, spacing: 4) {
                Text(time)
                    .font(.DS.micro)
                    .foregroundColor(.DS.Text.muted)

                if let badge {
                    DSBadge(text: badge.text, variant: badge.variant)
                }
            }
        }
        .padding(.horizontal, DSSpacing.lg)
        .padding(.vertical, DSSpacing.md)
        .background(Color.DS.surface)
    }
}

// MARK: - DS Activity List (grouped with separators)
struct DSActivityList: View {
    let items: [DSActivityItemModel]

    var body: some View {
        VStack(spacing: 1) {
            ForEach(items) { item in
                DSActivityItem(
                    initials: item.initials,
                    name: item.name,
                    description: item.description,
                    time: item.time,
                    badge: item.badge.map { .init(text: $0.text, variant: $0.variant) }
                )
                .cornerRadius(item.id == items.first?.id ? DSRadius.md : 0,
                              corners: [.topLeft, .topRight])
                .cornerRadius(item.id == items.last?.id ? DSRadius.md : 0,
                              corners: [.bottomLeft, .bottomRight])
            }
        }
        .background(Color.DS.neutralMid)
        .cornerRadius(DSRadius.md)
        .dsShadow(.card)
    }
}

// MARK: - Model
struct DSActivityItemModel: Identifiable {
    let id = UUID()
    let initials: String
    let name: String
    let description: String
    let time: String
    var badge: BadgeModel? = nil

    struct BadgeModel {
        let text: String
        let variant: DSBadgeVariant
    }
}

// MARK: - Rounded corners helper
extension View {
    func cornerRadius(_ radius: CGFloat, corners: UIRectCorner) -> some View {
        clipShape(RoundedCorner(radius: radius, corners: corners))
    }
}

struct RoundedCorner: Shape {
    var radius: CGFloat
    var corners: UIRectCorner

    func path(in rect: CGRect) -> Path {
        let path = UIBezierPath(
            roundedRect: rect,
            byRoundingCorners: corners,
            cornerRadii: CGSize(width: radius, height: radius)
        )
        return Path(path.cgPath)
    }
}

// MARK: - Preview
#Preview {
    DSActivityList(items: [
        .init(initials: "AL", name: "Alice Laurent", description: "A validé le rapport mensuel", time: "09:14",
              badge: .init(text: "New", variant: .accent)),
        .init(initials: "TM", name: "Thomas M.", description: "A mis à jour le projet Q1", time: "08:52"),
        .init(initials: "CR", name: "Clara R.", description: "Nouvelle demande d'accès", time: "08:30",
              badge: .init(text: "!", variant: .dark)),
        .init(initials: "JP", name: "Jean-Pierre B.", description: "Commentaire sur Tâche #482", time: "Hier"),
    ])
    .padding()
    .background(Color.DS.neutralLower)
}

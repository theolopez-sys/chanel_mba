import SwiftUI

// MARK: - DS Product Card
// Source: Revamp Clienteling App — Home (node 10194-92925)
// Two layouts: .grid (vertical, 2-col) · .list (horizontal, full-width)

// MARK: - Model

struct DSProductModel: Identifiable {
    let id = UUID()
    let name: String
    let collection: String
    let reference: String
    let price: String
    var badge: BadgeInfo? = nil
    var isWishlisted: Bool = false

    struct BadgeInfo {
        let text: String
        let variant: DSBadgeVariant
    }
}

// MARK: - Grid Card (vertical — for 2-column layout)

struct DSProductCard: View {
    let product: DSProductModel
    var onWishlist: (() -> Void)? = nil
    var onSelect: (() -> Void)? = nil

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {

            // ── Image area ──────────────────────────────────────────
            ZStack(alignment: .top) {

                // Placeholder
                Rectangle()
                    .fill(Color.DS.neutralLower)
                    .frame(maxWidth: .infinity)
                    .frame(height: 200)
                    .overlay(
                        Image(systemName: "photo")
                            .font(.system(size: 28, weight: .ultraLight))
                            .foregroundColor(.DS.neutralMid)
                    )

                // Badge · Wishlist row
                HStack(alignment: .top) {
                    if let badge = product.badge {
                        DSBadge(text: badge.text, variant: badge.variant)
                    }
                    Spacer()
                    wishlistButton(size: 34)
                }
                .padding(DSSpacing.sm)
            }

            // ── Info area ───────────────────────────────────────────
            VStack(alignment: .leading, spacing: 0) {

                // Collection
                Text(product.collection)
                    .dsLabel()
                    .padding(.top, DSSpacing.md)

                // Name
                Text(product.name)
                    .font(.DS.h3)
                    .foregroundColor(.DS.Text.heading)
                    .lineLimit(2)
                    .fixedSize(horizontal: false, vertical: true)
                    .padding(.top, DSSpacing.xs)

                // Reference
                Text(product.reference)
                    .font(.DS.micro)
                    .foregroundColor(.DS.Text.muted)
                    .padding(.top, DSSpacing.xs)

                // Separator
                Color.DS.neutralMid
                    .frame(height: 1)
                    .padding(.top, DSSpacing.md)

                // Price · CTA
                HStack(alignment: .center) {
                    Text(product.price)
                        .font(.DS.h3)
                        .foregroundColor(.DS.Text.heading)

                    Spacer()

                    selectButton
                }
                .padding(.top, DSSpacing.md)
            }
            .padding(.horizontal, DSSpacing.base)
            .padding(.bottom, DSSpacing.base)
        }
        .background(Color.DS.surface)
        .cornerRadius(DSRadius.lg)
        .dsShadow(.card)
    }

    // MARK: - Sub-views

    private func wishlistButton(size: CGFloat) -> some View {
        Button(action: { onWishlist?() }) {
            ZStack {
                Circle()
                    .fill(Color.DS.surface.opacity(0.92))
                    .frame(width: size, height: size)
                Image(systemName: product.isWishlisted ? "heart.fill" : "heart")
                    .font(.system(size: 13, weight: .medium))
                    .foregroundColor(
                        product.isWishlisted ? Color.DS.Status.error : .DS.Text.body
                    )
            }
        }
        .buttonStyle(.plain)
    }

    private var selectButton: some View {
        Button(action: { onSelect?() }) {
            HStack(spacing: DSSpacing.xs) {
                Image(systemName: "plus")
                    .font(.system(size: 10, weight: .bold))
                Text("Sélectionner")
                    .font(.DS.micro)
                    .kerning(0.8)
            }
            .foregroundColor(.DS.white)
            .padding(.horizontal, DSSpacing.md)
            .padding(.vertical, DSSpacing.sm)
            .background(Color.DS.black)
            .cornerRadius(DSRadius.full)
        }
        .buttonStyle(.plain)
    }
}

// MARK: - List Card (horizontal — for full-width list)

struct DSProductCardRow: View {
    let product: DSProductModel
    var onWishlist: (() -> Void)? = nil
    var onSelect: (() -> Void)? = nil

    private let thumbnailSize: CGFloat = 100

    var body: some View {
        HStack(spacing: 0) {

            // ── Thumbnail ───────────────────────────────────────────
            ZStack(alignment: .topLeading) {
                Color.DS.neutralLower
                    .frame(width: thumbnailSize, height: thumbnailSize)

                Image(systemName: "photo")
                    .font(.system(size: 20, weight: .ultraLight))
                    .foregroundColor(.DS.neutralMid)
                    .frame(width: thumbnailSize, height: thumbnailSize)

                if let badge = product.badge {
                    DSBadge(text: badge.text, variant: badge.variant)
                        .padding(DSSpacing.xs)
                }
            }

            // ── Info ────────────────────────────────────────────────
            VStack(alignment: .leading, spacing: DSSpacing.xs) {
                Text(product.collection)
                    .dsLabel()

                Text(product.name)
                    .font(.DS.bodySm)
                    .fontWeight(.semibold)
                    .foregroundColor(.DS.Text.heading)
                    .lineLimit(2)

                Text(product.reference)
                    .font(.DS.micro)
                    .foregroundColor(.DS.Text.muted)

                Spacer()

                Text(product.price)
                    .font(.DS.h3)
                    .foregroundColor(.DS.Text.heading)
            }
            .padding(.horizontal, DSSpacing.base)
            .padding(.vertical, DSSpacing.md)
            .frame(maxWidth: .infinity, alignment: .leading)

            // ── Wishlist ─────────────────────────────────────────────
            Button(action: { onWishlist?() }) {
                Image(systemName: product.isWishlisted ? "heart.fill" : "heart")
                    .font(.system(size: 16, weight: .medium))
                    .foregroundColor(
                        product.isWishlisted ? Color.DS.Status.error : .DS.Text.muted
                    )
                    .frame(width: 44, height: 44)
            }
            .buttonStyle(.plain)
            .padding(.trailing, DSSpacing.xs)
        }
        .frame(height: thumbnailSize)
        .background(Color.DS.surface)
        .cornerRadius(DSRadius.md)
        .dsShadow(.card)
    }
}

// MARK: - Sample data

extension DSProductModel {
    static let samples: [DSProductModel] = [
        .init(
            name: "Sac 2.55",
            collection: "Maroquinerie",
            reference: "REF. A37586 Y04515 94305",
            price: "7 200 €",
            badge: .init(text: "Nouveau", variant: .accent)
        ),
        .init(
            name: "Classic Flap Bag",
            collection: "Maroquinerie",
            reference: "REF. A01112 Y04060 94305",
            price: "8 900 €",
            isWishlisted: true
        ),
        .init(
            name: "N°5 L'Eau Eau de Parfum",
            collection: "Parfums",
            reference: "REF. CH-2024-N5LEP-100ML",
            price: "145 €"
        ),
        .init(
            name: "Bleu de CHANEL Eau de Parfum",
            collection: "Parfums",
            reference: "REF. CH-2024-BDCEDP-100ML",
            price: "135 €",
            badge: .init(text: "Bestseller", variant: .neutral)
        ),
    ]
}

// MARK: - Previews

#Preview("Grid — 2 colonnes") {
    ScrollView {
        LazyVGrid(
            columns: [GridItem(.flexible()), GridItem(.flexible())],
            spacing: DSSpacing.md
        ) {
            ForEach(DSProductModel.samples.prefix(2)) { product in
                DSProductCard(product: product, onWishlist: {}, onSelect: {})
            }
        }
        .padding(DSSpacing.pagePadding)
    }
    .background(Color.DS.neutralLower)
}

#Preview("List — pleine largeur") {
    ScrollView {
        VStack(spacing: DSSpacing.sm) {
            ForEach(DSProductModel.samples) { product in
                DSProductCardRow(product: product, onWishlist: {}, onSelect: {})
            }
        }
        .padding(DSSpacing.pagePadding)
    }
    .background(Color.DS.neutralLower)
}

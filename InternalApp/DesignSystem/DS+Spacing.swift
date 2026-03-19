import SwiftUI

// MARK: - Design System Spacing & Radius Tokens
// Source: Internal European Design System (Figma)
// Desktop values scaled down proportionally for mobile (÷ ~4)

enum DSSpacing {
    static let xs:  CGFloat = 4
    static let sm:  CGFloat = 8
    static let md:  CGFloat = 12
    static let base: CGFloat = 16
    static let lg:  CGFloat = 20
    static let xl:  CGFloat = 24   // --space-6
    static let xxl: CGFloat = 32
    static let xxxl: CGFloat = 40  // --space-10 (desktop gap)

    // Horizontal page padding (desktop 160px → 20px mobile)
    static let pagePadding: CGFloat = 20
}

enum DSRadius {
    static let sm:   CGFloat = 8
    static let md:   CGFloat = 12
    static let lg:   CGFloat = 20   // --radius-lg (desktop 24px)
    static let full: CGFloat = 999
}

enum DSShadow {
    struct Style {
        let color: Color
        let radius: CGFloat
        let x: CGFloat
        let y: CGFloat
    }

    static let card  = Style(color: .black.opacity(0.06), radius: 12, x: 0, y: 4)
    static let modal = Style(color: .black.opacity(0.15), radius: 32, x: 0, y: 12)
}

// MARK: - Shadow modifier convenience
extension View {
    func dsShadow(_ style: DSShadow.Style) -> some View {
        shadow(color: style.color, radius: style.radius, x: style.x, y: style.y)
    }
}

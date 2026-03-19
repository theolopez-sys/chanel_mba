import SwiftUI

// MARK: - Design System Typography Tokens
// Source: Internal European Design System (Figma)
// Title font: ABChanel_Corpo_2022:Semi_Bold → mapped to .serif (Georgia)
// Body font:  Helvetica:Regular            → mapped to system sans-serif
// Note: Install ABChanel font in the project to match the DS exactly.

extension Font {
    enum DS {
        // --font/size/3xl → 40px desktop → 36pt mobile
        static let hero   = Font.custom("Georgia-Bold", size: 36).leading(.tight)
        // --font/size/2xl → 28pt
        static let h1     = Font.custom("Georgia-Bold", size: 28)
        // --font/size/xl  → 22pt
        static let h2     = Font.custom("Georgia", size: 22)
        // --font/size/lg  → 20px desktop → 18pt mobile
        static let h3     = Font.system(size: 18, weight: .semibold, design: .default)

        // Body — Helvetica maps to system sans-serif on iOS
        static let bodyLg = Font.system(size: 17, weight: .regular)   // --font/size/lg
        static let body   = Font.system(size: 15, weight: .regular)   // --font/size/base
        static let bodySm = Font.system(size: 13, weight: .regular)   // --font/size/sm

        // Labels (uppercase, letter-spaced)
        static let label  = Font.system(size: 11, weight: .bold)      // --font/size/xs
        static let micro  = Font.system(size: 10, weight: .bold)

        // Tabbar
        static let tab    = Font.system(size: 10, weight: .regular)
    }
}

// MARK: - Text style modifier
struct DSTextStyle: ViewModifier {
    let font: Font
    let color: Color
    let isUppercased: Bool
    let letterSpacing: CGFloat

    func body(content: Content) -> some View {
        content
            .font(font)
            .foregroundColor(color)
            .kerning(letterSpacing)
            .textCase(isUppercased ? .uppercase : nil)
    }
}

extension View {
    func dsHeading(_ size: Font = .DS.h2) -> some View {
        modifier(DSTextStyle(
            font: size,
            color: .DS.Text.heading,
            isUppercased: false,
            letterSpacing: 0.2
        ))
    }

    func dsLabel() -> some View {
        modifier(DSTextStyle(
            font: .DS.label,
            color: .DS.Text.muted,
            isUppercased: true,
            letterSpacing: 1.5
        ))
    }

    func dsBody() -> some View {
        modifier(DSTextStyle(
            font: .DS.body,
            color: .DS.Text.body,
            isUppercased: false,
            letterSpacing: 0
        ))
    }
}

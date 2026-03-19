import SwiftUI

// MARK: - Design System Color Tokens
// Source: Internal European Design System (Figma)
// Tokens: --colors/*

extension Color {
    enum DS {
        // Core
        static let black        = Color(hex: "#000000")
        static let white        = Color(hex: "#FFFFFF")

        // Neutral
        static let neutralLower = Color(hex: "#EDEDED")  // --colors/neutral/lower
        static let neutralMid   = Color(hex: "#D4D4D4")
        static let neutralHigh  = Color(hex: "#A0A0A0")

        // Surface
        static let surface      = Color(hex: "#FFFFFF")  // --colors/surface/white

        // Text
        enum Text {
            static let heading  = Color(hex: "#000000")  // --colors/text/heading
            static let body     = Color(hex: "#333333")  // --colors/text/body
            static let muted    = Color(hex: "#888888")
            static let inverted = Color(hex: "#FFFFFF")
        }

        // Accent (gold — used sparingly)
        static let accent       = Color(hex: "#B8964E")

        // Semantic
        enum Status {
            static let success  = Color(hex: "#2D6A4F")
            static let warning  = Color(hex: "#E9C46A")
            static let error    = Color(hex: "#C1121F")
            static let info     = Color(hex: "#023E8A")
        }
    }
}

// MARK: - Hex initializer
extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3:
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6:
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8:
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (255, 0, 0, 0)
        }
        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue: Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}

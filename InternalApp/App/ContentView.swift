import SwiftUI

struct ContentView: View {
    @State private var selectedTab: Int = 0

    var body: some View {
        switch selectedTab {
        case 1:
            PlaceholderView(title: "Projets", selectedTab: $selectedTab)
        case 2:
            ProfileView(selectedTab: $selectedTab)
        case 3:
            PlaceholderView(title: "Réglages", selectedTab: $selectedTab)
        default:
            HomeView(selectedTab: $selectedTab)
        }
    }
}

#Preview {
    ContentView()
}

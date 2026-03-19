import SwiftUI

struct ContentView: View {
    @State private var selectedTab: Int = 0

    var body: some View {
        switch selectedTab {
        case 2:
            ProfileView(selectedTab: $selectedTab)
        default:
            HomeView(selectedTab: $selectedTab)
        }
    }
}

#Preview {
    ContentView()
}

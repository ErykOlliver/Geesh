import { View } from "react-native"
import ProfileStyle from "./style/ProfileStyle"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import { useTheme } from "../../components/DesigneTokens/themeContext";

export default function Profile() {
    const { theme } = useTheme();
    return (
        <View style={[ProfileStyle.body, { backgroundColor: theme.background }]}>
            <Header />
            <MainContent />
        </View>
    )
}
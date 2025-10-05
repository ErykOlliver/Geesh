import { View } from "react-native"
import LoginStyle from "./style/LoginStyle"
import Header from "./Components/Header"
import MainContent from "./Components/MainContent"
import { useTheme } from "../../components/DesigneTokens/themeContext";

export default function Login({ navigation }) {
    const { theme } = useTheme();
    return (
        <View style={[LoginStyle.body, { backgroundColor: theme.background }]}>
            <Header />
            <MainContent navigation={navigation} />
        </View>
    )
}
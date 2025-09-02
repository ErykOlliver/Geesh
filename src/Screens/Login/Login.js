import { View } from "react-native"
import LoginStyle from "./style/LoginStyle"
import Header from "./Components/Header"
import MainContent from "./Components/MainContent"

export default function Login() {
    return (
        <View style={LoginStyle.body}>
            <Header />
            <MainContent />
        </View>
    )
}
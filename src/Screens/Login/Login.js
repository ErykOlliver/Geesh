import { View } from "react-native"
import LoginStyle from "./style/LoginStyle.js"
import Header from "./Components/Header.js"
import MainContent from "./Components/MainContent.js"

export default function Login({ navigation }) {
    return (
        <View style={LoginStyle.body}>
            <Header />
            <MainContent navigation={navigation} />
        </View>
    )
}
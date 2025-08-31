import { View } from "react-native"
import LoginStyle from "./style/LoginStyle"
import Sup from "./Components/sup"
import Mid from "./Components/mid"
import Bot from "./Components/bot"

export default function Login() {
    return (
        <View style={LoginStyle.Body}>
            <Sup />
            <Mid />
        </View>
    )
}
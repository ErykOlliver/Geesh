import { Text, View } from "react-native";
import LoginStyle from "../style/LoginStyle";

export default function Header() {
    return (
        <View style={LoginStyle.header}>
            <View style={LoginStyle.header_container}>
                <Text style={LoginStyle.title}>
                    Welcome to Geesh
                </Text>
                <Text style={LoginStyle.sub_title}>
                    Log in using your CPF and password to start
                    Managing your energy in a smarter way
                </Text>
            </View>
        </View>
    )
}

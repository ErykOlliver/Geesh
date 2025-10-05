import { Text, View } from "react-native";
import LoginStyle from "../style/LoginStyle";
import { useTheme } from "../../../components/DesigneTokens/themeContext";
import { Shadow } from "react-native-shadow-2";

export default function Header() {
    const { theme } = useTheme();
    return (
        <Shadow distance={2.5} offset={[0, 1.5]} startColor='rgba(0, 0, 0, 0.05)' style={[LoginStyle.header, { backgroundColor: theme.surface, borderColor: theme.border }]}>
            <View style={LoginStyle.header_container}>
                <Text style={[LoginStyle.title, { color: theme.text }]}>
                    Welcome to Geesh
                </Text>
                <Text style={[LoginStyle.sub_title, { color: theme.text }]}>
                    Log in using your email and password to start
                    Managing your energy in a smarter way
                </Text>
            </View>
        </Shadow>
    )
}

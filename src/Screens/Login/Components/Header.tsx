import { Text, View } from "react-native";
import LoginStyle from "../style/LoginStyle";
import { useTheme } from "../../../components/DesigneTokens/themeContext";

export default function Header() {
    const { theme } = useTheme();
    return (
        <View style={[LoginStyle.header, { backgroundColor: theme.surface }]}>
            <View style={LoginStyle.header_container}>
                <Text style={LoginStyle.title}>
                    Welcome to Geesh
                </Text>
                <Text style={LoginStyle.sub_title}>
                    Log in using your email and password to start
                    Managing your energy in a smarter way
                </Text>
            </View>
        </View>
    )
}

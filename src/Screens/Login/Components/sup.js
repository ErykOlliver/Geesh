import { View, Text } from "react-native";
import LoginStyle from "../style/LoginStyle";

export default function Sup() {
    return (
        <View style={LoginStyle.Superior}>
            <Text style={LoginStyle.Titulo}>
                Welcome to Geesh
            </Text>
            <Text style={LoginStyle.SubTitulo}>
                Log in using your CPF and password to start
            </Text>
            <Text style={LoginStyle.Subsubtitulo}>
                Managing your energy in a smarter way
            </Text>
            <View style={LoginStyle.Linha} />
        </View>
    );
}
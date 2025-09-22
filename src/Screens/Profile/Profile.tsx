import { View } from "react-native"
import ProfileStyle from "./style/ProfileStyle"
import { LinearGradient } from "expo-linear-gradient"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import { Geesh_Primmary_Colors } from "../../components/DesigneTokens/pallets"

export default function Profile() {
    return (
        <View style={ProfileStyle.body}>
            <LinearGradient colors={[Geesh_Primmary_Colors.BluishWhite, Geesh_Primmary_Colors.Azure]} style={ProfileStyle.background} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} />
            <Header />
            <MainContent/>
        </View>
    )
}
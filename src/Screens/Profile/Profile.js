
import { View, Text, TouchableOpacity } from "react-native"
import ProfileStyle from "./style/ProfileStyle.js"
import { LinearGradient } from "expo-linear-gradient"
import { HugeiconsIcon } from "@hugeicons/react-native"
import { AiPhone01Icon, FlashIcon, Home01Icon, HugeiconsFreeIcons, LibrariesIcon, Mail01Icon, Moon02Icon, PencilEdit01Icon, PlayListAddFreeIcons, SmartPhone01Icon, User02Icon, User03Icon, ViewFreeIcons } from "@hugeicons/core-free-icons"
import { Screen_Size } from "../../components/DesigneTokens/metrics"
import { SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"
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
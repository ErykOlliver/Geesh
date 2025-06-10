import React from "react"
import { View, Text } from "react-native"
import ProfileStyle from "./style/ProfileStyle"
import { LinearGradient } from "expo-linear-gradient"
import { Primmary_Colors } from "../../components/DesigneTokens/pallets"

export default function Profile() {
    return (
        <View style={ProfileStyle.body}>
            <LinearGradient colors={[Primmary_Colors.BluishWhite, Primmary_Colors.Azure]} style={ProfileStyle.background} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} />
            <View style={ProfileStyle.header}></View>
            <View style={ProfileStyle.MainContent}></View>
        </View>
    )
}
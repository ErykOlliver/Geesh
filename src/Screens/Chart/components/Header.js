import React from "react";
import { View, Text } from "react-native";
import ChartStyle from "../style/ChartStyle";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Primmary_Colors, Secondary_Colors } from "../../../components/DesigneTokens/pallets";

export default function Header() {
    return (
        <View style={ChartStyle.Header}>
            <LinearGradient colors={[Secondary_Colors.White, Secondary_Colors.White80]} style={ChartStyle.HeaderBG} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1.1 }} />
            <View style={ChartStyle.HeaderContainer}>
                <Text style={ChartStyle.ChartTitle}>Chart</Text>
                <Text style={ChartStyle.ChartIndicator}>WIND ENERGY</Text>
            </View>
        </View>
    )
}
import React from "react";
import { View, Text } from "react-native";
import ChartStyle from "../style/ChartStyle.js";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Primmary_Colors, Secondary_Colors } from "../../../components/DesigneTokens/pallets.js";
import { useTranslation } from "react-i18next";


export default function Header() {
    const { t, i18n } = useTranslation();
    return (
        <View style={ChartStyle.Header}>
            <LinearGradient colors={[Secondary_Colors.White, Secondary_Colors.White80]} style={ChartStyle.HeaderBG} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1.1 }} />
            <View style={ChartStyle.HeaderContainer}>
                <Text style={ChartStyle.ChartTitle}>{t("Gráfico")}</Text>
                <Text style={ChartStyle.ChartIndicator}>{t("Energia Eólica")}</Text>
            </View>
        </View>
    )
}
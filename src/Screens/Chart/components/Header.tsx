import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ChartStyle from "../style/ChartStyle";
import { LinearGradient } from "expo-linear-gradient";
import { Geesh_Secondary_Colors } from "../../../components/DesigneTokens/pallets";
import { useTranslation } from "react-i18next";
import { Icon_Size, Screen_Size, Text_Sizes } from "../../../components/DesigneTokens/metrics";
import { Sun, Wind } from "lucide-react-native";


export default function Header() {
    const { t, i18n } = useTranslation();
    return (
        <View style={ChartStyle.Header}>
            <LinearGradient colors={[Geesh_Secondary_Colors.White, Geesh_Secondary_Colors.White80]} style={ChartStyle.HeaderBG} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1.1 }} />
            <View style={ChartStyle.HeaderContainer}>
                <Text style={ChartStyle.ChartTitle}>{t("Gráfico")}</Text>
                <View style={ChartStyle.WindSunPlace}>
                    <Text style={ChartStyle.ChartIndicator}>{t("Energia Eólica")}</Text>
                    <TouchableOpacity style={ChartStyle.SwitchChart}>
                        <Image source={require('../../../../assets/icons/InnerShadow.png')} style={{ width: 122 * (Screen_Size.width / 1080), borderRadius: 100 * (Screen_Size.width / 1080) , height: 70 * (Screen_Size.width / 1080), opacity:0.8, position: 'absolute', left: '1%' }} />
                        <Wind size={Text_Sizes.h2} />
                        <Sun size={Text_Sizes.h2}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
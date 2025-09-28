import React, { useLayoutEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ChartStyle from "../style/ChartStyle";
import { LinearGradient } from "expo-linear-gradient";
import { Geesh_Primmary_Colors, Geesh_Secondary_Colors } from "../../../components/DesigneTokens/pallets";
import { useTranslation } from "react-i18next";
import { Icon_Size, Screen_Size, Text_Sizes } from "../../../components/DesigneTokens/metrics";
import { Sun, Wind } from "lucide-react-native";

type HeaderProps = {
    switch_chart: () => void;
    isSolar: boolean;
};

export default function Header(props: HeaderProps) {
    const { t, i18n } = useTranslation();
    const [isSolar, setIsSolar] = useState(false);

    const toggleChart = () => {
        setIsSolar(!isSolar);
    };

    return (
        <View style={ChartStyle.Header}>
            <LinearGradient colors={[Geesh_Secondary_Colors.White, Geesh_Secondary_Colors.White80]} style={ChartStyle.HeaderBG} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1.1 }} />
            <View style={ChartStyle.HeaderContainer}>
                <Text style={ChartStyle.ChartTitle}>{t("Gráfico")}</Text>
                <View style={ChartStyle.WindSunPlace}>
                    <Text style={ChartStyle.ChartIndicator}>{!props.isSolar ? t("Energia Eólica") : t("Energia Solar")}</Text>
                    <TouchableOpacity style={ChartStyle.SwitchChart} onPress={props.switch_chart}>
                        {/* <Image source={require('../../../../assets/icons/InnerShadow.png')} style={[{ width: 122 * (Screen_Size.width / 1080) , borderRadius: 100 * (Screen_Size.width / 1080), height: 70 * (Screen_Size.width / 1080), opacity: 0.8, position: 'absolute',  }, {}]} /> */}
                        <Wind size={Text_Sizes.h2} color={!props.isSolar ? Geesh_Primmary_Colors.Azure : '#B3B3B3'} />
                        <Sun size={Text_Sizes.h2} color={props.isSolar ? Geesh_Primmary_Colors.GoldenHarvest : '#B3B3B3'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
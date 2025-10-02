import React, { useLayoutEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ChartStyle from "../style/ChartStyle";
import { LinearGradient } from "expo-linear-gradient";
import { Geesh_Primmary_Colors, Geesh_Secondary_Colors } from "../../../components/DesigneTokens/pallets";
import { useTranslation } from "react-i18next";
import { Icon_Size, Screen_Size, Text_Sizes } from "../../../components/DesigneTokens/metrics";
import { Sun, Wind } from "lucide-react-native";
import { Shadow } from "react-native-shadow-2";
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type HeaderProps = {
    switch_chart: () => void;
    isSolar: boolean;
};

export default function Header(props: HeaderProps) {
    const { t, i18n } = useTranslation();
    const translateX = useSharedValue(0);
    const progress = useSharedValue(props.isSolar ? 1 : 0)


    const toggleChart = () => {
        translateX.value = withTiming(props.isSolar ? 0 : 122 * (Screen_Size.width / 1080), { duration: 400 });
        progress.value = withTiming(props.isSolar ? 0 : 1, { duration: 600 })
    };

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const animatedColor = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            progress.value,
            [0, 1],
            [Geesh_Primmary_Colors.Azure, Geesh_Primmary_Colors.GoldenHarvest]
        );
        return { backgroundColor };
    });


    return (
        <Shadow distance={2.5} offset={[0, 1.5]} startColor='rgba(0, 0, 0, 0.05)' style={ChartStyle.Header}>
            <View style={ChartStyle.HeaderContainer}>
                <Text style={ChartStyle.ChartTitle}>{t("Gráfico")}</Text>
                <View style={ChartStyle.WindSunPlace}>
                    <Text style={ChartStyle.ChartIndicator}>{!props.isSolar ? t("Energia Eólica") : t("Energia Solar")}</Text>
                    <TouchableOpacity style={ChartStyle.SwitchChart} onPress={() => { props.switch_chart(), toggleChart() }}>
                        <Animated.View style={[{ position: 'absolute', width: 122 * (Screen_Size.width / 1080), borderRadius: 100 * (Screen_Size.width / 1080), height: 70 * (Screen_Size.width / 1080) }, !props.isSolar ? { backgroundColor: Geesh_Primmary_Colors.Azure } : { backgroundColor: Geesh_Primmary_Colors.GoldenHarvest }, animatedStyle, animatedColor]} />
                        <Wind size={Text_Sizes.h2} color={!props.isSolar ? Geesh_Secondary_Colors.White : '#B3B3B3'} />
                        <Sun size={Text_Sizes.h2} color={props.isSolar ? Geesh_Secondary_Colors.White : '#B3B3B3'} />
                    </TouchableOpacity>
                </View>
            </View>
        </Shadow>
    )
}
import React, { useEffect, useLayoutEffect, useState } from "react"
import { View, ScrollView, Button, TouchableOpacity, Image, Text } from "react-native"
import ChartStyle from "../style/ChartStyle";
import BarChart from "../../../components/ChartsBase/BarChart/BarChart";
import LineChart from "../../../components/ChartsBase/LineChart/LineChart";
import { useTranslation } from "react-i18next";
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";
import { Screen_Size, Text_Sizes } from "../../../components/DesigneTokens/metrics";
import { Geesh_Primmary_Colors } from "../../../components/DesigneTokens/pallets";
import { useNavigation } from "@react-navigation/native";
import { Sun, Wind } from "lucide-react-native";
import { Ionicons } from "@expo/vector-icons";

const RandomizeValuesInCharts = (min = 0, max = 200) => {

    const ListOfValues = []

    for (let i = 0; i <= 11; i++) {
        const RandomValue = Math.floor(Math.random() * (max - min) + min)
        ListOfValues.push(RandomValue)
    }

    return ListOfValues;
}

type MainContentProps = {
  animated_style: {};
};

export default function MainContent(props: MainContentProps) {
    const { t, i18n } = useTranslation();

    const [BCData, SetBCData] = useState([])
    const [LCData, SetLCData] = useState([])

    useEffect(() => {
        const Interval = setInterval(() => {
            SetBCData(RandomizeValuesInCharts())
            SetLCData(RandomizeValuesInCharts())
        }, 5000)

        return () => clearInterval(Interval)
    })

    const MouthsList = [t("Jan"), t("Feb"), t("Mar"), t("Apr"), t("May"), t("Jun"), t("Jul"), t("Aug"), t("Sep"), t("Oct"), t("Nov"), t("Dec")];
    return (
        <View style={ChartStyle.MainContent}>
            <View style={ChartStyle.MainContentContainer}>
                <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                    <Animated.View style={[ChartStyle.ChartsPlace, props.animated_style]}>
                        <View style={ChartStyle.Charts} >
                            <BarChart title={t("Consumo geral de energia")} data={BCData} labels={MouthsList} color={{ color0: Geesh_Primmary_Colors.BluishWhite, color60: Geesh_Primmary_Colors.Azure, color100: Geesh_Primmary_Colors.Azure }} />
                            <LineChart title={t("Entrada de energia em tempo real")} data={LCData} labels={MouthsList} color={{ color0: Geesh_Primmary_Colors.BluishWhite, color100: Geesh_Primmary_Colors.Azure }} />
                            <BarChart title={t("Consumo geral de energia")} data={BCData} labels={MouthsList} color={{ color0: Geesh_Primmary_Colors.BluishWhite, color60: Geesh_Primmary_Colors.Azure, color100: Geesh_Primmary_Colors.Azure }} />
                        </View>
                        <View style={ChartStyle.Charts} >
                            <BarChart title={t("Consumo geral de energia")} data={BCData} labels={MouthsList} color={{ color0: Geesh_Primmary_Colors.SunbeamGlow, color60: Geesh_Primmary_Colors.GoldenHarvest, color100: Geesh_Primmary_Colors.GoldenHarvest }} />
                            <LineChart title={t("Entrada de energia em tempo real")} data={LCData} labels={MouthsList} color={{ color0: Geesh_Primmary_Colors.SunbeamGlow, color100: Geesh_Primmary_Colors.GoldenHarvest }} />
                            <BarChart title={t("Consumo geral de energia")} data={BCData} labels={MouthsList} color={{ color0: Geesh_Primmary_Colors.SunbeamGlow, color60: Geesh_Primmary_Colors.GoldenHarvest, color100: Geesh_Primmary_Colors.GoldenHarvest }} />
                        </View>
                    </Animated.View>
                </ScrollView>
            </View>
        </View >
    )
}
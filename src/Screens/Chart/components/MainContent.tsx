import React, { useEffect, useState } from "react"
import { View, ScrollView, Button } from "react-native"
import ChartStyle from "../style/ChartStyle";
import BarChart from "../../../components/ChartsBase/BarChart/BarChart";
import LineChart from "../../../components/ChartsBase/LineChart/LineChart";
import { useTranslation } from "react-i18next";
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";
import { Screen_Size } from "../../../components/DesigneTokens/metrics";

const RandomizeValuesInCharts = (min = 0, max = 200) => {

    const ListOfValues = []

    for (let i = 0; i <= 11; i++) {
        const RandomValue = Math.floor(Math.random() * (max - min) + min)
        ListOfValues.push(RandomValue)
    }

    return ListOfValues;
}


export default function MainContent() {
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

    const [isSolar, setIsSolar] = useState(false);
    const translateX = useSharedValue(0);

    const toggleChart = () => {
        setIsSolar(!isSolar);
        translateX.value = withTiming(isSolar ? 0 : -Screen_Size.width, { duration: 400 });
    };

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));
    return (
        <View style={ChartStyle.MainContent}>
            <View style={ChartStyle.MainContentContainer}>
                <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                    <Button onPress={toggleChart} title="dsds" />
                    <Animated.View style={[ChartStyle.ChartsPlace, animatedStyle]}>
                        <View style={ChartStyle.Charts} >
                            <BarChart title={t("Consumo geral de energia")} data={BCData} labels={MouthsList} />
                            <LineChart title={t("Entrada de energia em tempo real")} data={LCData} labels={MouthsList} />
                            <BarChart title={t("Consumo geral de energia")} data={BCData} labels={MouthsList} />
                        </View>
                        <View style={ChartStyle.Charts} >
                            <BarChart title={t("Consumo geral de energia")} data={BCData} labels={MouthsList} />
                            <LineChart title={t("Entrada de energia em tempo real")} data={LCData} labels={MouthsList} />
                            <BarChart title={t("Consumo geral de energia")} data={BCData} labels={MouthsList} />
                        </View>
                    </Animated.View>
                </ScrollView>
            </View>
        </View >
    )
}
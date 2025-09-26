import React, { useEffect, useState } from 'react'
import ChartStyle from '../style/ChartStyle'
import { View } from 'lucide-react-native'
import BarChart from "../../../components/ChartsBase/BarChart/BarChart";
import LineChart from "../../../components/ChartsBase/LineChart/LineChart";
import { useTranslation } from "react-i18next";

const RandomizeValuesInCharts = (min = 0, max = 200) => {

    const ListOfValues = []

    for (let i = 0; i <= 11; i++) {
        const RandomValue = Math.floor(Math.random() * (max - min) + min)
        ListOfValues.push(RandomValue)
    }

    return ListOfValues;
}

export default function WindChart() {
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
        <View style={ChartStyle.ChartsPlace}>
            <BarChart title={t("Consumo geral de energia")} data={BCData} labels={MouthsList} />
            <LineChart title={t("Entrada de energia em tempo real")} data={LCData} labels={MouthsList} />
            <BarChart title={t("Consumo geral de energia")} data={BCData} labels={MouthsList} />
        </View>
    )
}

import React, { useEffect, useState } from "react"
import { View, Text, ScrollView } from "react-native"
import ChartStyle from "../style/ChartStyle.js";
import BarChart from "../../../components/ChartsBase/BarChart/BarChart";
import LineChart from "../../../components/ChartsBase/LineChart/LineChart";

const RandomizeValuesInCharts = (min = 0, max = 200) => {

    const ListOfValues = []

    for (let i = 0; i <= 11; i++) {
        const RandomValue = Math.floor(Math.random() * (max - min) + min)
        ListOfValues.push(RandomValue)
    }

    return ListOfValues;
}

const MouthsList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function MainContent() {
    const [BCData, SetBCData] = useState([])
    const [LCData, SetLCData] = useState([])

    useEffect(() => {
        const Interval = setInterval(() => {
            SetBCData(RandomizeValuesInCharts())
            SetLCData(RandomizeValuesInCharts())
        }, 5000)

        return () => clearInterval(Interval)
    })

    return (
        <View style={ChartStyle.MainContent}>
            <View style={ChartStyle.MainContentContainer}>
                <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                    <View style={ChartStyle.ChartsPlace}>
                        <BarChart title="General Energy Usage" data={BCData} labels={MouthsList} />
                        <LineChart title="General Energy Usage" data={LCData} labels={MouthsList} />
                        <BarChart title="General Energy Usage" data={BCData} labels={MouthsList} />
                    </View>
                </ScrollView>
            </View>
        </View >
    )
}
import React from "react"
import { View, Text, ScrollView } from "react-native"
import ChartStyle from "../style/ChartStyle.js";
import BarChart from "../../../components/ChartsBase/BarChart/BarChart";
import LineChart from "../../../components/ChartsBase/LineChart/LineChart";



const RandomizeValuesInCharts = (min = 0, max = 200) => {

    const ListOfValues = []


    for (let i = 0; i <= 11; i++) {
        const RandomValue = Math.floor(Math.random() * (max - min) + min)
        ListOfValues.push(RandomValue)
        if (ListOfValues.length >= 11) continue
    }

    return ListOfValues;
}
const Bardata = RandomizeValuesInCharts();

const Linedata = RandomizeValuesInCharts();

const MouthsList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function MainContent() {
    return (
        <View style={ChartStyle.MainContent}>
            <View style={ChartStyle.MainContentContainer}>
                <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                    <View style={ChartStyle.ChartsPlace}>
                        <BarChart title="General Energy Usage" data={Bardata} labels={MouthsList} />
                        <LineChart title="General Energy Usage" data={Linedata} labels={MouthsList} />
                        <BarChart title="General Energy Usage" data={Bardata} labels={MouthsList} />
                    </View>
                </ScrollView>
            </View>
        </View >
    )
}
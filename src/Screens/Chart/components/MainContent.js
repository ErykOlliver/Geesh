import React from "react"
import { View, Text } from "react-native"
import ChartStyle from "../style/ChartStyle"
import BarChart from "../../../components/ChartsBase/BarChart/BarChart"

const data = [50, 20, 40, 80, 30, 90, 30, 70, 60, 10, 40, 20];
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function MainContent() {
    return (
        <View style={ChartStyle.MainContent}>
            <View style={ChartStyle.MainContentContainer}>
                <BarChart data={data} labels={labels} />
                <BarChart data={data} labels={labels} />
            </View>
        </View>
    )
}
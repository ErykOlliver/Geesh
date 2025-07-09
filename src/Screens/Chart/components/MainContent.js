import React from "react"
import { View, Text } from "react-native"
import ChartStyle from "../style/ChartStyle"
import BarChart from "../../../components/ChartsBase/BarChart/BarChart"

export default function MainContent() {
    return (
        <View style={ChartStyle.MainContent}>
            <BarChart  />
        </View>
    )
}
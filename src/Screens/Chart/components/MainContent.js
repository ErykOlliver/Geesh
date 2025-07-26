import React from "react"
import { View, Text, ScrollView } from "react-native"
import ChartStyle from "../style/ChartStyle.js";
import BarChart from "../../../components/ChartsBase/BarChart/BarChart";

const data = [50, 20, 40, 80, 30, 150, 30, 70, 60, 77, 40, 20];
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function MainContent() {
    return (
        <View style={ChartStyle.MainContent}>
            <View style={ChartStyle.MainContentContainer}>
                <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                    <View style={ChartStyle.ChartsPlace}>
                        <BarChart title="General Energy Usage" data={data} labels={labels} />
                        <BarChart title="General Energy Usage" data={data} labels={labels} />
                        <BarChart title="General Energy Usage" data={data} labels={labels} />
                    </View>
                </ScrollView>
            </View>
        </View >
    )
}
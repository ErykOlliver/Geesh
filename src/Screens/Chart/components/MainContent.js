import React from "react"
import { View, Text, ScrollView } from "react-native"
import ChartStyle from "../style/ChartStyle.js";
import BarChart from "../../../components/ChartsBase/BarChart/BarChart";
import LineChart from "../../../components/ChartsBase/LineChart/LineChart";

const Bardata = [50, 20, 40, 80, 30, 150, 30, 70, 60, 77, 40, 20];
const Barlabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Linedata = [50, 20, 40, 80, 30, 150, 30, 70, 60, 77, 40, 20];
const Linelabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



export default function MainContent() {
    return (
        <View style={ChartStyle.MainContent}>
            <View style={ChartStyle.MainContentContainer}>
                <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
                    <View style={ChartStyle.ChartsPlace}>
                        <BarChart title="General Energy Usage" data={Bardata} labels={Barlabels} />
                        <LineChart title="General Energy Usage" data={Linedata} labels={Linelabels} />
                        <BarChart title="General Energy Usage" data={Bardata} labels={Barlabels} />
                    </View>
                </ScrollView>
            </View>
        </View >
    )
}
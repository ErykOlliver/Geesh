import React from "react"
import { View } from "react-native"
import ChartStyle from "./style/ChartStyle"
import Header from "./components/Header"
import MainContent from "./components/MainContent"


export default function Chart() {
    return (
        <View style={ChartStyle.Body}>
            <Header />
            <MainContent />
        </View>
    )
}
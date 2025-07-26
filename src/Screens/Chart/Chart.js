import React from "react"
import { View, Text } from "react-native"
import ChartStyle from "./style/ChartStyle.js"
import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"


export default function Chart() {
    return (
        <View style={ChartStyle.Body}>
            <Header />
            <MainContent />
        </View>
    )
}
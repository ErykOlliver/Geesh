import React, { useState } from "react"
import { View } from "react-native"
import ChartStyle from "./style/ChartStyle"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { Screen_Size } from "../../components/DesigneTokens/metrics"


export default function Chart() {
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
        <View style={ChartStyle.Body}>
            <Header isSolar={isSolar} switch_chart={toggleChart} />
            <MainContent animated_style={animatedStyle} />
        </View>
    )
}
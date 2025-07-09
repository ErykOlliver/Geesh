import { useState } from "react";
import { View } from "react-native";
import Svg, { Rect } from "react-native-svg";
import style from "./style/style";


type BarChartProps = {
    data: string[];
}

const Aspect_Ration = 9 / 16;


export default function BarChart(props: BarChartProps) {
    const [width, setWidth] = useState(0);
    const height = width * Aspect_Ration;

    return (
        <View style={style.container} onLayout={({ nativeEvent }) => setWidth(nativeEvent.layout.width)}>
            <Svg>
                <Rect></Rect>
            </Svg>
        </View>
    )
}
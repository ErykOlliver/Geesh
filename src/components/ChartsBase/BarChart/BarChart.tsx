import { useState } from "react";
import { View } from "react-native";
import Svg, { Line, Rect } from "react-native-svg";
import style from "./style/style";


type BarChartProps = {
    data?: string[];
}

const Aspect_Ration = 9 / 16;


export default function BarChart(props: BarChartProps) {
    const [width, setWidth] = useState(0);
    const height = width * Aspect_Ration;

    return (
        <View style={style.container} onLayout={({ nativeEvent }) => setWidth(nativeEvent.layout.width)}>
            <Svg width={width} height={height}>
                {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
                    const y = height * ratio;
                    return (
                        <Line
                            key={index}
                            x1="0"
                            y1={y}
                            x2={width}
                            y2={y}
                            stroke="#1c1c1c"
                            strokeWidth="0.5"
                        />
                    );
                })}
            </Svg>
        </View>
    )
}
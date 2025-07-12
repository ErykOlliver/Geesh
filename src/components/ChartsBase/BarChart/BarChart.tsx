import { useState } from "react";
import { Dimensions, View } from "react-native";
import Svg, { Line, Rect, Text } from "react-native-svg";
import style from "./style/style";
import { Primmary_Colors } from "../../DesigneTokens/pallets";
import { Geesh_Fonts } from "../../DesigneTokens/fonts";
import { Text_Sizes } from "../../DesigneTokens/metrics";


type BarChartProps = {
    data?: number[];
    labels: string[];
}

const Aspect_Ration = 9 / 16;
const maxvalue = 100;
const spaceBetweenBars = 25;
const chartHeight = 250;
const chartWidth = Dimensions.get("window").width - 40;
const barWidth = 15;


export default function BarChart(props: BarChartProps) {
    const [width, setWidth] = useState(0);
    const height = width * Aspect_Ration;

    return (
        <View style={{ flex: 1, height: chartHeight + 50, width: chartWidth, alignItems: 'center' }} onLayout={({ nativeEvent }) => setWidth(nativeEvent.layout.width)}>
            <Svg width={width} height={chartHeight}>
                {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
                    const y = height * ratio;
                    return (
                        <Line
                            key={index}
                            x1="0"
                            y1={y}
                            x2={chartWidth}
                            y2={y}
                            stroke="#1c1c1c"
                            strokeWidth="0.5"
                        />
                    );
                })};

                {props.data.map((value, index) => {
                    const barHeight = (value / maxvalue) * height
                    const x = index * (barWidth + spaceBetweenBars)
                    const y = height - barHeight;
                    return (
                        <Rect
                            key={index}
                            x={x}
                            y={y}
                            width={barWidth + 10}
                            height={chartHeight}
                            fill={Primmary_Colors.Azure}
                            rx={15}
                        />
                    );
                })}
                {props.labels.map((label, index) => {
                    const x = index * (barWidth + spaceBetweenBars) + barWidth / 2;
                    return (
                        <Text
                            key={index}
                            x={x}
                            y={chartHeight}
                            fontSize={Text_Sizes.h4}
                            fill="#333"
                            textAnchor="middle"
                            transform={`rotate(-90, ${x}, ${height + 10})`}
                        >

                            {label}
                        </Text>
                    );
                })}
                {props.data.map((value, index) => {
                    const barHeight = (value / maxvalue) * height;
                    const x = index * (barWidth + spaceBetweenBars) + (barWidth + 10) / 2;
                    const y = height - barHeight - 5; // 5px acima da barra

                    return (
                        <Text
                            key={`value-${index}`}
                            x={x}
                            y={y}
                            fontSize={Text_Sizes.h6 ?? 10}
                            fill="#333"
                            textAnchor="middle"
                        >
                            {value}
                        </Text>
                    );
                })}
            </Svg>
        </View>
    )
}
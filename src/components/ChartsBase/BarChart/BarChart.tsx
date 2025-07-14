import { useState } from "react";
import { Dimensions, View } from "react-native";
import Svg, { Line, Rect, Text, LinearGradient, Defs, Stop } from "react-native-svg";
import { Primmary_Colors } from "../../DesigneTokens/pallets";
import { Geesh_Fonts } from "../../DesigneTokens/fonts";
import { Screen_Size, Text_Sizes } from "../../DesigneTokens/metrics";


type BarChartProps = {
    data?: number[];
    labels: string[];
}

const Aspect_Ration = 9 / 16;
const maxvalue = 250;
const spaceBetweenBars = 22;
const chartHeight = 250;
const barWidth = 13;
const chartWidth = Screen_Size.width - 40;


export default function BarChart(props: BarChartProps) {
    const [width, setWidth] = useState(Screen_Size.width);
    const height = width * Aspect_Ration;


    return (
        <View style={{ marginLeft: 10, marginRight: 10 }} >
            {/* Main */}
            <View style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <Svg width={width} height={height}>
                    {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
                        const y = height * ratio;
                        return (
                            <Line
                                key={index}
                                x1={0}
                                y1={y}
                                x2={width}
                                y2={y}
                                stroke="#1c1c1c"
                                strokeOpacity={0.3}
                                strokeWidth="0.5"
                            />
                        );
                    })};
                    <Defs>
                        <LinearGradient id="BCGradient" x1="0" y1="0" x2="0" y2="1">
                            <Stop offset="0%" stopColor={Primmary_Colors.BluishWhite} stopOpacity={0.9} />
                            <Stop offset="60%" stopColor={Primmary_Colors.Azure} stopOpacity={0.9} />
                            <Stop offset="100%" stopColor={Primmary_Colors.Azure} stopOpacity={1} />
                        </LinearGradient>
                    </Defs>
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
                                height={height}
                                fill="url(#BCGradient)"
                                rx={15}
                            />
                        );
                    })}
                </Svg>
                <Svg width={15} height={height}>
                    {props.data.map((value, index) => {
                        const x = 20
                        const y = height * value;

                        return (
                            <Text
                                key={index}
                                x={x}
                                y={y}
                                fontSize={Text_Sizes.h5 ?? 10}
                                fontWeight="bold"
                                fill="#333"
                                textAnchor="middle"
                            >
                                {value}
                            </Text>
                        );
                    })}
                </Svg>
            </View>
            <View>
                <Svg width={width} height={height + 30}>
                    {props.labels.map((label, index) => {
                        const x = index * (barWidth + spaceBetweenBars) + barWidth / 2;
                        const labelY = height + 20;
                        return (
                            <Text
                                key={index}
                                x={x + 22}
                                y={labelY}
                                fontSize={11}
                                fill="#333"
                                textAnchor="middle"
                                transform={`rotate(-45, ${x + 22}, ${labelY})`}
                                fontFamily={Geesh_Fonts.InriaRegular}
                            >
                                {label}
                            </Text>
                        );
                    })}
                </Svg>
            </View>
        </View>
    )
}
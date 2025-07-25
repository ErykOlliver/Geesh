import { useState } from "react";
import { Dimensions, View, } from "react-native";
import Svg, { Line, Rect, Text, LinearGradient, Defs, Stop } from "react-native-svg";
import { Primmary_Colors } from "../../DesigneTokens/pallets";
import { Geesh_Fonts } from "../../DesigneTokens/fonts";
import { Screen_Size, Text_Sizes } from "../../DesigneTokens/metrics";
import ValueInLeft from "./components/ValueInLeft";


type BarChartProps = {
    data?: number[];
    labels: string[];
}

const Aspect_Ration = 9 / 16;

const maxValue = 250;
const step = 50;
const barWidth = 13;
const spaceBetweenBars = 22;
const chartHeight = 250;
const chartWidth = Screen_Size.width - 40;


export default function BarChart(props: BarChartProps) {
    const [width, setWidth] = useState(Screen_Size.width);
    const height = width * Aspect_Ration;
    const fontSize = Text_Sizes.body;

    const yTicks = [];
    for (let v = 0; v <= maxValue; v += step) yTicks.push(v);

    return (
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', borderWidth: 1, borderColor: 'cyan', height: chartHeight + 5 }}>
            <View style={{ borderWidth: 2, borderColor: 'purple', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ValueInLeft data={yTicks} />
            </View>

            <View style={{ borderWidth: 1, height: chartHeight + 5, borderColor: 'blue', width: '100%' }}>
                {/* Main */}
                <View style={{ display: 'flex', borderWidth: 2, borderColor: 'green' }}>
                    <Svg width={width - 40} height={chartHeight}>
                        {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
                            const y = chartHeight * ratio;
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
                            const barHeight = (value / maxValue) * height
                            const x = index * (barWidth + spaceBetweenBars)
                            const y = height - barHeight;
                            return (
                                <Rect
                                    key={index}
                                    x={x}
                                    y={y}
                                    width={barWidth + 15}
                                    height={height}
                                    fill="url(#BCGradient)"
                                    rx={15}
                                />
                            );
                        })}
                    </Svg>
                    <Svg width={width - 50} height={height}>
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
                <View style={{ borderWidth: 2, borderColor: 'pink' }}>
                    <Svg width={chartWidth} height={height + 50}>
                        {props.labels.map((label, index) => {
                            const x = index * (barWidth + spaceBetweenBars) + barWidth / 2;
                            const labelY = height + 20;
                            return (
                                <Text
                                    key={index}
                                    x={x + 22}
                                    y={labelY}
                                    fontSize={Text_Sizes.h5}
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
        </View>
    )
}
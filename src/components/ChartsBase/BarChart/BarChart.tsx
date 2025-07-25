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


const maxValue = 250;
const step = 50;
const barWidth = 13;
const spaceBetweenBars = 22;
const chartHeight = 250;
const chartWidth = 365;


export default function BarChart(props: BarChartProps) {
    const [ChartSize, SetChartSize] = useState({ width: 0, height: 0 })
    const monthsInBottom = 3;
    const sizeOfTextMonths = Text_Sizes.h5;
    const sizeBottomBarOfMonths = sizeOfTextMonths * monthsInBottom;


    const yTicks = [];
    for (let v = 0; v <= maxValue; v += step) yTicks.push(v);

    return (
        <View style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', borderWidth: 1, borderColor: 'cyan', height: chartHeight + 5 }}>
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ValueInLeft data={yTicks.reverse()} />
            </View>

            <View style={{ borderWidth: 1, height: chartHeight + 5, borderColor: 'red', width: '100%' }} onLayout={(event) => {
                const { width, height } = event.nativeEvent.layout;
                SetChartSize({ width, height })
            }}>
                <Svg width={ChartSize.width} height={ChartSize.height}>
                    {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
                        const y = chartHeight * ratio;
                        return (
                            <Line
                                key={index}
                                x1={0}
                                y1={y}
                                x2={chartWidth}
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
                        const barHeight = (value / maxValue) * ChartSize.height
                        const x = index * (barWidth + spaceBetweenBars)
                        const y = ChartSize.height - barHeight;
                        return (
                            <Rect
                                key={index}
                                x={x}
                                y={y}
                                width={barWidth + 15}
                                height={ChartSize.height}
                                fill="url(#BCGradient)"
                                rx={15}
                            />
                        );
                    })}
                </Svg>
                <View style={{ borderWidth: 2, borderColor: 'pink', width: '100%', height: sizeBottomBarOfMonths }}>
                    <Svg width={ChartSize.width} height={sizeBottomBarOfMonths}>
                        {props.labels.map((label, index) => {
                            const x = index * (barWidth + spaceBetweenBars) + barWidth / 2;
                            const labelY = ChartSize.height + 20;
                            return (
                                <Text
                                    key={index}
                                    x={x + 22}
                                    y={labelY}
                                    fontSize={sizeOfTextMonths}
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
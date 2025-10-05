import { useState } from "react";
import { View, } from "react-native";
import { Svg, Line, Text, LinearGradient, Defs, Stop, Path } from "react-native-svg";
import { Geesh_Fonts } from "../../DesigneTokens/fonts";
import { Screen_Size, Text_Sizes } from "../../DesigneTokens/metrics";
import ValueInLeft from "./components/ValueInLeft";
import * as d3 from 'd3'
import { useTheme } from "../../DesigneTokens/themeContext";


type BarChartProps = {
    data?: number[];
    labels: string[];
    color?: { color0?: string, color60?: string, color100?: string }
}


const maxValue = 250;
const step = 50;
const chartHeight = 250;


export default function LineChartBase(props: BarChartProps) {
    const [ChartSize, SetChartSize] = useState({ width: 0, height: 0 })
    const monthsInBottom = 9 * (Screen_Size.width / 1080);
    const sizeOfTextMonths = Text_Sizes.h5;
    const sizeBottomBarOfMonths = sizeOfTextMonths * monthsInBottom;
    const { theme } = useTheme();

    const min = Math.min(...props.data)
    const max = Math.max(...props.data)

    const yScale = d3.scaleLinear().domain([min, max]).range([chartHeight, 0])
    const xScale = d3.scaleLinear().domain([0, props.data.length - 1]).range([0, ChartSize.width])

    const linefn = d3
        .line<number>()
        .y((d, i) => yScale(d))
        .x((d, i) => xScale(i))

    const areafn = d3
        .area<number>()
        .x((d, i) => xScale(i))
        .y0(ChartSize.height)
        .y1((d, i) => yScale(d))

    const SvgLine = linefn(props.data) ?? ""
    const SvgArea = areafn(props.data) ?? ""


    const yTicks = [];
    for (let v = 0; v <= maxValue; v += step) yTicks.push(v);

    return (

        <View style={{ width: '100%', height: chartHeight, display: 'flex', alignItems: 'center' }} onLayout={(event) => {
            const { width, height } = event.nativeEvent.layout;
            if (ChartSize.width !== width || ChartSize.height !== height) {
                SetChartSize({ width, height });
            }
        }}>
            <View style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>

                <View style={{ borderBottomWidth: 1 * (Screen_Size.width / 1080), borderColor: theme.text, display: 'flex', padding: 5 * (Screen_Size.width / 1080), alignItems: 'center', justifyContent: 'center', height: ChartSize.height }}>
                    <ValueInLeft data={yTicks.reverse()} />
                </View>

                <View style={{ display: 'flex', borderBottomWidth: 1 * (Screen_Size.width / 1080), flexDirection: 'column', height: ChartSize.height, width: ChartSize.width - 38, overflow: 'hidden', borderColor: theme.text }}>
                    <Svg width='100%' height='100%'>
                        {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
                            const y = ChartSize.height * ratio;
                            return (
                                <Line
                                    key={index}
                                    x1={0}
                                    y1={y}
                                    x2={ChartSize.width}
                                    y2={y}
                                    stroke={theme.text}
                                    strokeOpacity={0.3}
                                    strokeWidth="0.5"
                                />
                            );
                        })};
                        <Defs>
                            <LinearGradient id="LCGradient" x1="0" y1="0" x2="0" y2="1">
                                <Stop offset="0%" stopColor={props.color?.color0} stopOpacity={0.5} />
                                <Stop offset="100%" stopColor={props.color?.color100} stopOpacity={0} />
                            </LinearGradient>
                        </Defs>
                        <Path d={SvgLine} stroke={props.color?.color100} fill='none' strokeWidth={0.5} />
                        <Path d={SvgArea} stroke="none" fill='url(#LCGradient)' />
                    </Svg>
                </View>
            </View>
            <View style={{ display: 'flex', width: Screen_Size.width, height: sizeBottomBarOfMonths, paddingLeft: 75 * (Screen_Size.width / 1080), justifyContent: 'flex-start', alignItems: 'center' }}>
                <Svg width='100%' height={sizeBottomBarOfMonths}>
                    {props.labels.map((label, index) => {
                        const totalBars = props.data.length;
                        const dynamicSpacing = 5 * (Screen_Size.width / 1080);
                        const dynamicBarWidth = (ChartSize.width - 38 - (totalBars - 1) * dynamicSpacing) / totalBars;

                        const x = index * (dynamicBarWidth + dynamicSpacing);
                        const labelY = sizeBottomBarOfMonths;
                        return (
                            <Text
                                key={index}
                                x={x + 76 * (Screen_Size.width / 1080)}
                                y={labelY}
                                fontSize={sizeOfTextMonths}
                                fill={theme.text}
                                textAnchor="middle"
                                transform={`rotate(-45, ${x}, ${labelY})`}
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
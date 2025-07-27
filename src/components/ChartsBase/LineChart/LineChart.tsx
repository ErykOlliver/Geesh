import { Text, View } from "react-native";
import { Geesh_Fonts } from "../../DesigneTokens/fonts.js";
import { Text_Sizes } from "../../DesigneTokens/metrics.js";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { FilterVerticalIcon } from "@hugeicons/core-free-icons";
import BaseFilter from "../../Reuse/FilterBase/BaseFilter.tsx";
import style from "./style/style.tsx";
import LineChartBase from "./LineChartBase.tsx";


type BarChartProps = {
    title?: string;
    data?: number[];
    labels: string[];
}

const Options = [
    { label: 'Teste', value: 1 }
]


export default function LineChart(props: BarChartProps) {
    return (
        <View style={style.body}>
            <View style={style.header}>
                <Text style={style.Title}>
                    {props.title}
                </Text>
                <View style={style.FilterPlace} >
                    <BaseFilter title="Filter" />
                </View>
            </View>
            <LineChartBase data={props.data} labels={props.labels} />
        </View>
    )
}
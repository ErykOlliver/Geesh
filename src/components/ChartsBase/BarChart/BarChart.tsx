import { Text, View } from "react-native";
import style from "./style/style.tsx";
import BaseFilter from "../../Reuse/FilterBase/BaseFilter.tsx";
import BarChartBase from "./BarChartBase.tsx";


type BarChartProps = {
    title?: string;
    data?: number[];
    labels: string[];
}

const Options = [
    { label: 'Teste', value: 1 }
]


export default function BarChart(props: BarChartProps) {
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
            <BarChartBase data={props.data} labels={props.labels} />
        </View>
    )
}
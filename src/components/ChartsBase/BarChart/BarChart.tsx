import { Text, View } from "react-native";
import BarChartBase from "./BarChartBase.tsx";
import { Geesh_Fonts } from "../../DesigneTokens/fonts.js";
import { Text_Sizes } from "../../DesigneTokens/metrics.js";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { FilterVerticalIcon } from "@hugeicons/core-free-icons";
import BaseFilter from "../../Reuse/FilterBase/BaseFilter.tsx";


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
        <View style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <Text style={{ paddingVertical: 6, fontFamily: Geesh_Fonts.InriaBold, fontSize: Text_Sizes.h3 }}>
                    {props.title}
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    <BaseFilter title="Filter" />
                </View>
            </View>
            <BarChartBase data={props.data} labels={props.labels} />
        </View>
    )
}
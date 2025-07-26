import { Text, View } from "react-native";
import BarChartBase from "./BarChartBase.tsx";
import { Geesh_Fonts } from "../../DesigneTokens/fonts.js";
import { Text_Sizes } from "../../DesigneTokens/metrics.js";
import { HugeiconsIcon } from "@hugeicons/react-native";
import DropdownComponent from "../../Reuse/DropDownBase/DropDown.tsx";
import { FilterVerticalIcon } from "@hugeicons/core-free-icons";



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
                    <HugeiconsIcon icon={FilterVerticalIcon} />
                    <DropdownComponent op={Options} />
                </View>
            </View>
            <BarChartBase data={props.data} labels={props.labels} />
        </View>
    )
}
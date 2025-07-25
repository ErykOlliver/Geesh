import { Text, View } from "react-native";
import BarChartBase from "./BarChartBase";
import { Geesh_Fonts } from "../../DesigneTokens/fonts";
import { Text_Sizes } from "../../DesigneTokens/metrics";
import { HugeiconsIcon } from "@hugeicons/react-native";
import DropdownComponent from "../../Reuse/DropDownBase/DropDown";




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
        <View style={{ width: '100%', display: 'flex', flexDirection: 'column', borderWidth: 1 }}>
            <View style={{ display: 'flex', flexDirection: 'row', borderWidth: 1, width: '100%', justifyContent: 'space-between' }}>
                <Text style={{ paddingVertical: 6, borderWidth: 1, fontFamily: Geesh_Fonts.InriaBold, fontSize: Text_Sizes.h3 }}>
                    {props.title}
                </Text>
                <View style={{ borderWidth: 1 }} >
                    <DropdownComponent op={Options} />
                </View>
            </View>
            <BarChartBase data={props.data} labels={props.labels} />
        </View>
    )
}
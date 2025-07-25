import { Text, View } from "react-native";
import BarChartBase from "./BarChartBase";



type BarChartProps = {
    data?: number[];
    labels: string[];
}



export default function BarChart(props: BarChartProps) {
    return (
        <View style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <View style={{ borderWidth: 1, width: '100%', justifyContent: 'space-between' }}>
                <Text style={{}}>
                </Text>
            </View>
            <BarChartBase data={props.data} labels={props.labels} />
        </View>
    )
}
import { Text, View } from "react-native";
import style from "./style/style";
import BaseFilter from "../../Reuse/FilterBase/BaseFilter";
import BarChartBase from "./BarChartBase";
import { useTranslation } from "react-i18next";


type BarChartProps = {
    title?: string;
    data?: number[];
    labels: string[];
    color?: { color0?: string, color60?: string, color100?: string }
}

const Options = [
    { label: 'Teste', value: 1 }
]


export default function BarChart(props: BarChartProps) {
    const { t, i18n } = useTranslation();

    return (
        <View style={style.body}>
            <View style={style.header}>
                <Text style={style.Title}>
                    {props.title}
                </Text>
                <View style={style.FilterPlace} >
                    <BaseFilter title={t('filtrar')} />
                </View>
            </View>
            <BarChartBase data={props.data} labels={props.labels} color={{ color0: props.color.color0, color60: props.color.color60, color100: props.color.color100 }} />
        </View>
    )
}
import { Text, View } from "react-native";
import style from "./style/style";
import { Icon_Size, Screen_Size } from "../../DesigneTokens/metrics";
import { ChevronDown, SlidersHorizontal } from "lucide-react-native";

type FilterProps = {
    title: string
}

export default function BaseFilter(props: FilterProps) {
    return (
        <View style={style.body}>
            <View style={style.FilterIcon}>
                <SlidersHorizontal size={70 * (Screen_Size.width / 1080)} strokeWidth={4 * (Screen_Size.width / 1080)} />
            </View>

            <View style={style.container}>
                <Text style={style.Title}>{props.title}</Text>
                <ChevronDown size={Icon_Size.IconXL} strokeWidth={4 * (Screen_Size.width / 1080)} />
            </View>
        </View>
    )
}
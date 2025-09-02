import { Text, View } from "react-native";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { ArrowDown01Icon, FilterVerticalIcon } from "@hugeicons/core-free-icons";
import style from "./style/style.tsx";
import { Icon_Size, Screen_Size } from "../../DesigneTokens/metrics.js";

type FilterProps = {
    title: string
}

export default function BaseFilter(props: FilterProps) {
    return (
        <View style={style.body}>
            <View style={style.FilterIcon}>
                <HugeiconsIcon icon={FilterVerticalIcon} size={70 * (Screen_Size.width / 1080)} />
            </View>

            <View style={style.container}>
                <Text style={style.Title}>{props.title}</Text>
                <HugeiconsIcon icon={ArrowDown01Icon} size={Icon_Size.IconXL} />
            </View>
        </View>
    )
}
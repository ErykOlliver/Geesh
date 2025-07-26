import { Text, View } from "react-native";
import BaseFilterStyle from "./style/BaseFilterStyle.js";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { ArrowDown01Icon, FilterVerticalIcon } from "@hugeicons/core-free-icons";

type FilterProps = {
    title: string
}

export default function BaseFilter(props: FilterProps) {
    return (
        <View style={BaseFilterStyle.body}>
            <HugeiconsIcon icon={FilterVerticalIcon} />

            <View style={BaseFilterStyle.container}>
                <Text>{props.title}</Text>
                <HugeiconsIcon icon={ArrowDown01Icon} />
            </View>
        </View>
    )
}
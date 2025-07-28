import { Text, View } from "react-native";
import style from "./style/style.tsx";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { ArrowDown01Icon, FilterVerticalIcon } from "@hugeicons/core-free-icons";

type DropDownProps = {
    title: string
}

export default function DropDownComponent(props: DropDownProps) {
    return (
        <View style={style.body}>
            <View style={style.container}>
                <Text style={style.Title}>{props.title}</Text>
                <HugeiconsIcon icon={ArrowDown01Icon} size={30} />
            </View>
        </View>
    )
}
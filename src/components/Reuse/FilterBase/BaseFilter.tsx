import { View } from "react-native";
import BaseFilterStyle from "./style/BaseFilterStyle.js";

type FilterProps = {
    title: string
}

export default function BaseFilter(props: FilterProps) {
    return (
        <View style={BaseFilterStyle.body}>
            
        </View>
    )
}
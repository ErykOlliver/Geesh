import { Text, TouchableOpacity, View } from "react-native";
import style from "./style/style";
import { Icon_Size, Screen_Size } from "../../DesigneTokens/metrics";
import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react-native";
import { useTheme } from "../../DesigneTokens/themeContext";

type FilterProps = {
    title: string
}

export default function BaseFilter(props: FilterProps) {
    const { theme } = useTheme();
    return (
        <View style={style.body}>
            <View style={style.FilterIcon}>
                <SlidersHorizontal size={70 * (Screen_Size.width / 1080)} color={theme.text} strokeWidth={4 * (Screen_Size.width / 1080)} />
            </View>

            <TouchableOpacity style={[style.container, { backgroundColor: theme.surface, borderColor: theme.border }]}>
                <Text style={[style.Title, { color: theme.text }]}>{props.title}</Text>
                <ChevronDown size={Icon_Size.IconXL} color={theme.text} strokeWidth={4 * (Screen_Size.width / 1080)} />
            </TouchableOpacity>
        </View>
    )
}
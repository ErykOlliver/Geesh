import { TouchableOpacity, View } from "react-native";
import { useState } from "react";
import ToggleStyle from "./style/style";
import { useTheme } from "../../DesigneTokens/themeContext";

type ToggleProps = {
    function?: () => void;
}

export default function ToggleComponent(props: ToggleProps) {
    const [toggle, setToggle] = useState(false)
    const { theme } = useTheme();
    const onToggle = () => {
        setToggle(!toggle);
        props.function?.();
    }
    return (
        <TouchableOpacity style={[!toggle ? ToggleStyle.onToggle : ToggleStyle.offToggle, { backgroundColor: theme.surface, borderColor: theme.border }]} onPress={onToggle}>
            <View style={ToggleStyle.Circle}></View>
        </TouchableOpacity>
    )
}
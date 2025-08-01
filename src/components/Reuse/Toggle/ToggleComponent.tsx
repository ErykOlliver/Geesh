import { TouchableOpacity, View } from "react-native";
import ToggleStyle from "./style/style";
import { useState } from "react";

type ToggleProps = {
    function?: () => void;
}

export default function ToggleComponent(props: ToggleProps) {
    const [toggle, setToggle] = useState(false)

    const onToggle = () => {
        setToggle(!toggle);
        props.function?.();
    }
    return (
        <TouchableOpacity style={!toggle ? ToggleStyle.onToggle : ToggleStyle.offToggle} onPress={onToggle}>
            <View style={ToggleStyle.Circle}></View>
        </TouchableOpacity>
    )
}
import { TouchableOpacity, View } from "react-native";
import { useState } from "react";
import ToggleStyle from "./style/style.tsx";

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
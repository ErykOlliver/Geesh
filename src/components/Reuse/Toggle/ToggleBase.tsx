import { TouchableOpacity, View } from "react-native";
import ToggleStyle from "./style/style";
import { useState } from "react";

type ToggleProps = {
    function?: () => void;
}

export default function ToggleBase(props: ToggleProps) {
    const [toggle, setToggle] = useState(false)

    const onToggle = () => setToggle(!toggle);
    return (
        <TouchableOpacity style={!toggle ? ToggleStyle.onToggle : ToggleStyle.offToggle} onPress={onToggle}>
            <View style={ToggleStyle.Circle}></View>
        </TouchableOpacity>
    )
}
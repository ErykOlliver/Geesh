import { TouchableOpacity, View } from "react-native";
import ToggleStyle from "./style/style";

type ToggleProps = {
    function?: () => void;
}

export default function ToggleBase(props: ToggleProps) {
    return (
        <TouchableOpacity style={ToggleStyle.toggle}>
            <View style={ToggleStyle.Circle}></View>
        </TouchableOpacity>
    )
}
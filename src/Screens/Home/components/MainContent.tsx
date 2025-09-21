import { View } from "react-native";
import HomeStyle from "../style/HomeStyle";
import Panel from "./Panel";
import Active from "./Active";


export default function MainContent() {
    return (
        <View style={HomeStyle.Main_Content}>
            <View style={HomeStyle.M_Content}>
                <Panel />
                <Active />
            </View>
        </View>
    )
}
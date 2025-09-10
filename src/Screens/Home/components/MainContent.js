import { View } from "react-native";
import HomeStyle from "../style/HomeStyle.js";
import Panel from "./Panel.js";
import Active from "./Active.js";


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
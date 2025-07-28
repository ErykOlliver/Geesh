import { View } from "react-native";
import UserPanelStyle from "./style/UserPanelStyle.js";

type UserProps = {
    userName?: string;
    UID: number;
    Avatar?: React.ReactNode;
}

export default function UserPanel(props: UserProps) {
    return (
        <View style={UserPanelStyle.body}>

        </View>
    )
}
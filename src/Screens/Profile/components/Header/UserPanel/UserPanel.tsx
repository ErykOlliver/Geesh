import { Image, Text, View } from "react-native";
import UserPanelStyle from "./style/UserPanelStyle.js";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Screen_Size } from "../../../../../components/DesigneTokens/metrics.js";
import { User03Icon } from "@hugeicons/core-free-icons";

type UserProps = {
    userName?: string;
    UID: number;
    Avatar?: any;
}

export default function UserPanel(props: UserProps) {
    return (
        <View style={UserPanelStyle.body}>
            <View style={UserPanelStyle.container}>
                <View style={UserPanelStyle.main}>
                    <View style={UserPanelStyle.avatarPlace}>
                        {props.Avatar ? (
                            <Image source={props.Avatar} style={UserPanelStyle.avatar} />
                        ) : (
                            <HugeiconsIcon icon={User03Icon} size={100} />
                        )}
                    </View>
                    <View style={UserPanelStyle.userInfos}>
                        <Text style={UserPanelStyle.userName}>{props.userName}</Text>
                        <Text style={UserPanelStyle.UID}>{props.UID}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
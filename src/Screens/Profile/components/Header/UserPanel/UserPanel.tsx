import { Image, Text, TouchableOpacity, View } from "react-native";
import UserPanelStyle from "./style/UserPanelStyle.tsx";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Screen_Size } from "../../../../../components/DesigneTokens/metrics.js";
import { PencilEdit01Icon, User03Icon } from "@hugeicons/core-free-icons";

type UserProps = {
    userName?: String
    UID: String
    Avatar?: String,
    OnPress: () => void
}

export default function UserPanel(props: UserProps) {
    return (
        <View style={UserPanelStyle.body}>
            <View style={UserPanelStyle.container}>
                <View style={UserPanelStyle.main}>
                    <TouchableOpacity style={UserPanelStyle.avatarPlace} onPress={props.OnPress}>
                        {props.Avatar ? (
                            <Image source={{ uri: props.Avatar}} style={UserPanelStyle.avatar} />
                        ) : (
                            <HugeiconsIcon icon={User03Icon} size={100 * (Screen_Size.width / 1080)} />
                        )}
                    </TouchableOpacity>
                    <View style={UserPanelStyle.userInfos}>
                        <View style={UserPanelStyle.userNamePlace}>
                            <Text style={UserPanelStyle.userName}>{props.userName}</Text>
                            <HugeiconsIcon icon={PencilEdit01Icon} />
                        </View>
                        <Text style={UserPanelStyle.UID}>ID: {props.UID}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
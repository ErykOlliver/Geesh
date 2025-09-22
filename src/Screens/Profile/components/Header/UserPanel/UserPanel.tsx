import { Image, Text, TouchableOpacity, View } from "react-native";
import UserPanelStyle from "./style/UserPanelStyle";
import { Icon_Size, Screen_Size } from "../../../../../components/DesigneTokens/metrics";
import { SquarePen, User } from "lucide-react-native";

type UserProps = {
    userName?: string
    UID?: number
    Avatar?: string,
    OnPress: () => void
}

export default function UserPanel(props: UserProps) {
    return (
        <View style={UserPanelStyle.body}>
            <View style={UserPanelStyle.container}>
                <View style={UserPanelStyle.main}>
                    <TouchableOpacity style={UserPanelStyle.avatarPlace} onPress={props.OnPress}>
                        {props.Avatar ? (
                            <Image source={{ uri: props.Avatar }} style={UserPanelStyle.avatar} />
                        ) : (
                            <User size={100 * (Screen_Size.width / 1080)} strokeWidth={4 * (Screen_Size.width / 1080)} />
                        )}
                    </TouchableOpacity>
                    <View style={UserPanelStyle.userInfos}>
                        <View style={UserPanelStyle.userNamePlace}>
                            <Text style={UserPanelStyle.userName}>{props.userName}</Text>
                            <SquarePen size={Icon_Size.Icon1xl} strokeWidth={4 * (Screen_Size.width / 1080)} />
                        </View>
                        <Text style={UserPanelStyle.UID}>ID: {props.UID}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
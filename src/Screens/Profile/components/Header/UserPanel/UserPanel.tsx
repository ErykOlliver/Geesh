import { Image, Text, TouchableOpacity, View } from "react-native";
import UserPanelStyle from "./style/UserPanelStyle";
import { Icon_Size, Screen_Size } from "../../../../../components/DesigneTokens/metrics";
import { ImagePlus, Images, Replace, SquarePen, User } from "lucide-react-native";
import { Shadow } from "react-native-shadow-2";

type UserProps = {
    userName?: string
    UID?: number
    Avatar?: string,
    OnPress: () => void,
    userEmail?: string;
}

export default function UserPanel(props: UserProps) {
    return (
        <View style={UserPanelStyle.body}>
            <View style={UserPanelStyle.container}>
                <View style={UserPanelStyle.main}>
                    <Shadow distance={10 * (Screen_Size.width / 1080)} style={UserPanelStyle.avatarPlace} offset={[0, 2 * (Screen_Size.width / 1080)]} startColor='rgba(0, 160, 255, 0.8)' endColor='rgba(0, 0, 0, 0)'>
                        <TouchableOpacity onPress={props.OnPress} style={UserPanelStyle.avatarPlace}>
                            {props.Avatar ? (
                                <Image source={{ uri: props.Avatar }} style={UserPanelStyle.avatar} />
                            ) : (
                                <User size={100 * (Screen_Size.width / 1080)} strokeWidth={4 * (Screen_Size.width / 1080)} />
                            )}
                        </TouchableOpacity>
                        <View style={UserPanelStyle.PopupPicture}>
                            {props.Avatar ? (
                                <Images size={40 * (Screen_Size.width / 1080)} strokeWidth={4 * (Screen_Size.width / 1080)} />
                            ) : (
                                <ImagePlus size={40 * (Screen_Size.width / 1080)} strokeWidth={4 * (Screen_Size.width / 1080)} />
                            )}
                        </View>
                    </Shadow>
                    <View style={UserPanelStyle.userInfos}>
                        <View style={UserPanelStyle.userNamePlace}>
                            <Text style={UserPanelStyle.userName}>{props.userName}</Text>
                            <SquarePen size={Icon_Size.Icon1xl} strokeWidth={4 * (Screen_Size.width / 1080)} />
                        </View>
                        <Text style={UserPanelStyle.email}>{props.userEmail}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
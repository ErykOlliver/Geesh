import { Image, Text, TouchableOpacity, View } from "react-native";
import UserPanelStyle from "./style/UserPanelStyle";
import { Icon_Size, Screen_Size } from "../../../../../components/DesigneTokens/metrics";
import { ImagePlus, Images, Replace, SquarePen, User } from "lucide-react-native";
import { Shadow } from "react-native-shadow-2";
import { useTheme } from "../../../../../components/DesigneTokens/themeContext";

type UserProps = {
    userName?: string
    UID?: number
    Avatar?: string,
    OnPress: () => void,
    userEmail?: string;
}

export default function UserPanel(props: UserProps) {
    const { theme } = useTheme();
    return (
        <View style={[UserPanelStyle.body, { backgroundColor: theme.surface }]}>
            <View style={UserPanelStyle.container}>
                <View style={UserPanelStyle.main}>
                    <Shadow distance={10 * (Screen_Size.width / 1080)} style={UserPanelStyle.avatarPlace} offset={[0, 2 * (Screen_Size.width / 1080)]} startColor='rgba(0, 160, 255, 0.8)' endColor='rgba(0, 0, 0, 0)'>
                        <TouchableOpacity onPress={props.OnPress} style={[UserPanelStyle.avatarPlace, { backgroundColor: theme.surface }]}>
                            {props.Avatar ? (
                                <Image source={{ uri: props.Avatar }} style={UserPanelStyle.avatar} />
                            ) : (
                                <User size={100 * (Screen_Size.width / 1080)} color={theme.text} strokeWidth={4 * (Screen_Size.width / 1080)} />
                            )}
                        </TouchableOpacity>
                        <View style={[UserPanelStyle.PopupPicture, {backgroundColor: theme.background}]}>
                            {props.Avatar ? (
                                <Images size={40 * (Screen_Size.width / 1080)} color={theme.text} strokeWidth={4 * (Screen_Size.width / 1080)} />
                            ) : (
                                <ImagePlus size={40 * (Screen_Size.width / 1080)} color={theme.text} strokeWidth={4 * (Screen_Size.width / 1080)} />
                            )}
                        </View>
                    </Shadow>
                    <View style={UserPanelStyle.userInfos}>
                        <View style={UserPanelStyle.userNamePlace}>
                            <Text style={[UserPanelStyle.userName, { color: theme.text }]}>{props.userName}</Text>
                            <SquarePen size={Icon_Size.Icon1xl} color={theme.text} strokeWidth={4 * (Screen_Size.width / 1080)} />
                        </View>
                        <Text style={[UserPanelStyle.email, { color: theme.text }]}>{props.userEmail}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
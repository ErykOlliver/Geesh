import { View } from "react-native";
import UserCredentialStyle from "./style/UserCredentialStyle";
import PopCredential from "./PopCredential";
import { Mail, Phone } from "lucide-react-native";
import { Screen_Size } from "../../../../../components/DesigneTokens/metrics";

type UserCredential = {
    userEmail?: string;
    userPhone: number;
}

export default function UserCredential(props: UserCredential) {
    return (
        <View style={UserCredentialStyle.body}>
            <View style={UserCredentialStyle.container}>
                <View style={UserCredentialStyle.main}>
                    <PopCredential icon={<Mail size={70 * (Screen_Size.width / 1080)} strokeWidth={4 * (Screen_Size.width / 1080)} />} title={props.userEmail} />
                    <PopCredential icon={<Phone size={70 * (Screen_Size.width / 1080)} strokeWidth={4 * (Screen_Size.width / 1080)} />} title={props.userPhone.toString()} />
                </View>
            </View>
        </View>
    )
}
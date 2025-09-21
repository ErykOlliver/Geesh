import { View } from "react-native";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Mail01Icon, PencilEdit01Icon, SmartPhone01Icon, User03Icon } from "@hugeicons/core-free-icons";
import UserCredentialStyle from "./style/UserCredentialStyle";
import PopCredential from "./PopCredential";

type UserCredential = {
    userEmail?: string;
    userPhone: number;
}

export default function UserCredential(props: UserCredential) {
    return (
        <View style={UserCredentialStyle.body}>
            <View style={UserCredentialStyle.container}>
                <View style={UserCredentialStyle.main}>
                    <PopCredential icon={<HugeiconsIcon icon={Mail01Icon} />} title={props.userEmail} />
                    <PopCredential icon={<HugeiconsIcon icon={SmartPhone01Icon} />} title={props.userPhone.toString()} />
                </View>
            </View>
        </View>
    )
}
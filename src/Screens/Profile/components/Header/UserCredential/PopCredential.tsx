import { Image, Text, View } from "react-native";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Screen_Size } from "../../../../../components/DesigneTokens/metrics";
import { PencilEdit01Icon, User03Icon } from "@hugeicons/core-free-icons";
import UserCredentialStyle from "./style/UserCredentialStyle";

type PopProps = {
    icon: React.ReactNode;
    title: string;
}

export default function PopCredential(props: PopProps) {
    return (
        <View style={UserCredentialStyle.Pop}>
            <View style={UserCredentialStyle.PopContainer}>
                {props.icon}
                <Text style={UserCredentialStyle.PopTitle}> {props.title} </Text>
            </View>
        </View>
    )
}
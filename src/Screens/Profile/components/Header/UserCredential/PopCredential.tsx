import {Text, View } from "react-native";
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
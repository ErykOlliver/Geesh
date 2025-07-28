import { Text, TouchableOpacity, View } from "react-native";
import { startTransition, useState } from "react";
import ToggleComponent from "../Toggle/ToggleComponent";
import OptionStyle from "./style/style";

type OptionProps = {
    icon: React.ReactNode;
    title: string;
    toggle: boolean;
    function?: () => void;
}

export default function OptionComponent(props: OptionProps) {
    const StartFunction = () => {
        props.function?.();
    }
    return (
        <View style={OptionStyle.body}>
            {props.toggle ? (
                <View style={OptionStyle.container}>
                    <View style={OptionStyle.icon}>
                        {props.icon}
                    </View>
                    <View style={OptionStyle.main}>
                        <Text style={OptionStyle.title}>{props.title}</Text>
                        <ToggleComponent function={StartFunction} />
                    </View>
                </View>
            ) : (
                <TouchableOpacity onPress={StartFunction}>
                    <View>
                        {props.icon}
                    </View>
                    <View>
                        <Text>{props.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    )
}
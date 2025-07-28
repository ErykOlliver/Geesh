import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import ToggleComponent from "../Toggle/ToggleComponent.tsx";
import OptionStyle from "./style/style.tsx";

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
                <TouchableOpacity onPress={StartFunction} style={OptionStyle.container} >
                    <View style={OptionStyle.icon}>
                        {props.icon}
                    </View>
                    <View style={OptionStyle.main}>
                        <Text style={OptionStyle.title}>{props.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    )
}
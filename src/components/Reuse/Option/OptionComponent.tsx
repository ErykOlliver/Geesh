import { Text, TouchableOpacity, View } from "react-native";
import { startTransition, useState } from "react";
import ToggleComponent from "../Toggle/ToggleComponent";

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
        <View>
            {props.toggle ? (
                <View>
                    <View>
                        {props.icon}
                    </View>
                    <View>
                        <Text>{props.title}</Text>
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
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import ToggleComponent from "../Toggle/ToggleComponent.tsx";
import OptionStyle from "./style/style.tsx";
import DropDownComponent from "../DropDown/DropDownComponent.tsx";

type OptionType = 'default' | 'toggle' | 'dropdown'

type OptionProps = {
    icon: React.ReactNode;
    title: string;
    type: OptionType;
    function?: () => void;
}

export default function OptionComponent(props: OptionProps) {
    const StartFunction = () => {
        props.function?.();
    }

    const renderOptions = () => {
        switch (props.type) {
            case 'default':
                return (
                    <TouchableOpacity onPress={StartFunction} style={OptionStyle.container} >
                        <View style={OptionStyle.icon}>
                            {props.icon}
                        </View>
                        <View style={OptionStyle.main}>
                            <Text style={OptionStyle.title}>{props.title}</Text>
                        </View>
                    </TouchableOpacity>
                )
            case 'toggle':
                return (
                    <View style={OptionStyle.container}>
                        <View style={OptionStyle.icon}>
                            {props.icon}
                        </View>
                        <View style={OptionStyle.main}>
                            <Text style={OptionStyle.title}>{props.title}</Text>
                            <ToggleComponent function={StartFunction} />
                        </View>
                    </View>
                )
            case 'dropdown':
                return (
                    <View style={OptionStyle.container}>
                        <View style={OptionStyle.icon}>
                            {props.icon}
                        </View>
                        <View style={OptionStyle.main}>
                            <Text style={OptionStyle.title}>{props.title}</Text>
                            <DropDownComponent title="English" />
                        </View>
                    </View>
                )
        }
    }
    return (
        <View style={OptionStyle.body}>
            {renderOptions()}
        </View>
    )
}
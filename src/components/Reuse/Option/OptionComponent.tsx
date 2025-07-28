import { View } from "react-native";
import { useState } from "react";

type OptionProps = {
    icon: React.ReactNode;
    title: string;
    toggle: boolean;
    function?: () => void;
}

export default function OptionComponent(props: OptionProps) {
    return (
        <View>
            {!props.toggle ? (
                <View>
                    
                </View>
            ) : (
                <View>

                </View>
            )}
        </View>
    )
}
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ArrowDown01Icon, ArrowUp01Icon, FilterVerticalIcon } from "@hugeicons/core-free-icons";
import SectionSettingsStyle from "./style/SectionSettingsStyle.tsx";



type SectionSettingsProps = {
    title: string;
    children: React.ReactNode;
}

export default function SectionSettinsComponent(props: SectionSettingsProps) {

    return (
        <View style={SectionSettingsStyle.body}>
            <View style={SectionSettingsStyle.header}>
                <Text style={SectionSettingsStyle.title}>{props.title}</Text>
            </View>
            <View style={SectionSettingsStyle.main}>
                {props.children}
            </View>
        </View >

    )
}
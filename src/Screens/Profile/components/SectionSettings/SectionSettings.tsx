import { Text, View } from "react-native";
import SectionSettingsStyle from "./style/SectionSettingsStyle";



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
import { Text, View } from "react-native";
import SectionSettingsStyle from "./style/SectionSettingsStyle";
import { useTheme } from "../../../../components/DesigneTokens/themeContext";



type SectionSettingsProps = {
    title: string;
    children: React.ReactNode;
}

export default function SectionSettinsComponent(props: SectionSettingsProps) {
    const { theme } = useTheme();
    return (
        <View style={SectionSettingsStyle.body}>
            <View style={SectionSettingsStyle.header}>
                <Text style={[SectionSettingsStyle.title, { color: theme.text }]}>{props.title}</Text>
            </View>
            <View style={SectionSettingsStyle.main}>
                {props.children}
            </View>
        </View >

    )
}
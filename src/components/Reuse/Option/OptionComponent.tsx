import { Text, TouchableOpacity, View } from "react-native";
import DropDownComponent, { dataPrefab } from "../DropDown/DropDownComponent";
import OptionStyle from "./style/style";
import ToggleComponent from "../Toggle/ToggleComponent";
import { useTheme } from "../../DesigneTokens/themeContext";

type OptionType = 'default' | 'toggle' | 'dropdown' | 'information'

type OptionProps = {
    icon?: React.ReactNode;
    title: string;
    info?: string;
    type: OptionType;
    data?: dataPrefab[];
    function?: (selected?: any) => void | Promise<void>;
    value?: boolean
}



export default function OptionComponent(props: OptionProps) {
    const StartFunction = async () => {
        await props.function?.();
    }
    const { theme } = useTheme();
    const renderOptions = () => {
        switch (props.type) {
            case 'default':
                return (
                    <TouchableOpacity onPress={StartFunction} style={OptionStyle.container} >
                        <View style={OptionStyle.icon}>
                            {props.icon}
                        </View>
                        <View style={[OptionStyle.main, { borderColor: theme.text }]}>
                            <Text style={[OptionStyle.title, { color: theme.text }]}>{props.title}</Text>
                        </View>
                    </TouchableOpacity>
                )
            case 'toggle':
                return (
                    <View style={OptionStyle.container}>
                        <View style={OptionStyle.icon}>
                            {props.icon}
                        </View>
                        <View style={[OptionStyle.main, { borderColor: theme.text }]}>
                            <Text style={[OptionStyle.title, { color: theme.text }]}>{props.title}</Text>
                            <ToggleComponent function={StartFunction} value={props.value} />
                        </View>
                    </View>
                )
            case 'dropdown':
                return (
                    <View style={OptionStyle.container}>
                        <View style={OptionStyle.icon}>
                            {props.icon}
                        </View>
                        <View style={[OptionStyle.main, { borderColor: theme.text }]}>
                            <Text style={[OptionStyle.title, { color: theme.text }]}>{props.title}</Text>
                            <DropDownComponent data={props.data} onChange={props.function} />
                        </View>
                    </View>
                )
            case 'information':
                return (
                    <View style={OptionStyle.container}>

                        <View style={[OptionStyle.mainInfo, { borderColor: theme.text }]}>
                            <Text style={[OptionStyle.title, { color: theme.text }]}>{props.title}</Text>
                            <Text style={[OptionStyle.title, { color: theme.text }]}>{props.info}</Text>
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
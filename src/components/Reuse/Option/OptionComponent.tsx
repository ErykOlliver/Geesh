import { Text, TouchableOpacity, View } from "react-native";
import DropDownComponent, { dataPrefab } from "../DropDown/DropDownComponent";
import OptionStyle from "./style/style";
import ToggleComponent from "../Toggle/ToggleComponent";

type OptionType = 'default' | 'toggle' | 'dropdown' | 'information'

type OptionProps = {
    icon: React.ReactNode;
    title: string;
    info?: string;
    type: OptionType;
    data?: dataPrefab[];
    function?: (selected?: any) => void | Promise<void>;
}



export default function OptionComponent(props: OptionProps) {
    const StartFunction = async () => {
        await props.function?.();
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
                            <DropDownComponent data={props.data} onChange={props.function} />
                        </View>
                    </View>
                )
            case 'information':
                return (
                    <View style={OptionStyle.container}>
                        
                        <View style={OptionStyle.mainInfo}>
                            <Text style={OptionStyle.title}>{props.title}</Text>
                            <Text style={OptionStyle.title}>{props.info}</Text>
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
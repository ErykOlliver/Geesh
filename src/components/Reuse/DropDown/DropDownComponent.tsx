import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import style from "./style/style.tsx";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { ArrowDown01Icon, ArrowUp01Icon, FilterVerticalIcon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import DropDownStyle from "./style/style.tsx";

type dataPrefab = {
    label: string;
    value: number;
}

type DropDownProps = {
    data?: dataPrefab[]
}

export default function DropDownComponent(props: DropDownProps) {
    const [SelectedOption, SetOption] = useState(props.data?.[0].label.toString())
    const [toggle, setToggle] = useState(false)

    const onToggle = () => {
        setToggle(!toggle);
    }
    return (
        <View style={DropDownStyle.body}>
            <TouchableOpacity style={DropDownStyle.main} onPress={onToggle}>
                <View style={style.container}>
                    <Text style={style.SelectedOption}>{SelectedOption}</Text>
                    <HugeiconsIcon icon={!toggle ? ArrowDown01Icon : ArrowUp01Icon} size={30} />
                </View>
            </TouchableOpacity>
            <View style={toggle ? DropDownStyle.ListVisible : { display: 'none' }}>
                <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                    <View style={DropDownStyle.ListContent}>
                        {props.data.map((req, index) => (
                            <TouchableOpacity>
                                <Text key={index} style={DropDownStyle.Option}>
                                    {req.label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>

    )
}
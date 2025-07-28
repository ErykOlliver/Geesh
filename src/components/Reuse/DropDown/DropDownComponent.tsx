import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import style from "./style/style.tsx";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { ArrowDown01Icon, ArrowUp01Icon, FilterVerticalIcon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import DropDownStyle from "./style/style.tsx";

export type dataPrefab = {
    label: string;
    value: number;
}

type DropDownProps = {
    data?: dataPrefab[]
}

export default function DropDownComponent(props: DropDownProps) {
    const [SelectedOption, SetOption] = useState(props.data?.[0].label.toString())
    const [toggle, setToggle] = useState(false)


    const ChooseThisOption = (req: string) => {
        SetOption(req)
        setToggle(!toggle)
    }
    return (
        <View style={DropDownStyle.body}>
            <TouchableOpacity style={DropDownStyle.main} onPress={() => setToggle(!toggle)}>
                <View style={style.container}>
                    <Text style={style.SelectedOption}>{SelectedOption}</Text>
                    <HugeiconsIcon icon={!toggle ? ArrowDown01Icon : ArrowUp01Icon} size={30} />
                </View>
            </TouchableOpacity>
            <View style={toggle ? DropDownStyle.ListVisible : { display: 'none' }}>
                <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={true}>
                    <View style={DropDownStyle.ListContent}>
                        {props.data.map((req, index) => (
                            <TouchableOpacity key={index} onPress={() => ChooseThisOption(req.label)}>
                                <Text style={DropDownStyle.Option}>
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
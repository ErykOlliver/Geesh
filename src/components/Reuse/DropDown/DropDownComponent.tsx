import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import style from "./style/style.tsx";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { ArrowDown01Icon, ArrowUp01Icon, FilterVerticalIcon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import DropDownStyle from "./style/style.tsx";

export type dataPrefab = {
    label: string;
    value: string;
}

type DropDownProps = {
    data?: dataPrefab[]
    onChange?: (item: dataPrefab) => void;

}

export default function DropDownComponent(props: DropDownProps) {
    const [selected, setSelected] = useState<dataPrefab | null>(
        props.data?.[0] ?? null
    );
    const [toggle, setToggle] = useState(false)


    const ChooseThisOption = (Item: dataPrefab) => {
        setSelected(Item)
        setToggle(false)
        props.onChange?.(Item)
    }
    return (
        <View style={DropDownStyle.body}>
            <TouchableOpacity style={DropDownStyle.main} onPress={() => setToggle(!toggle)}>
                <View style={style.container}>
                    <Text style={style.SelectedOption}>{selected.label}</Text>
                    <HugeiconsIcon icon={!toggle ? ArrowDown01Icon : ArrowUp01Icon} size={30} />
                </View>
            </TouchableOpacity>
            {toggle && (
                <View style={toggle ? DropDownStyle.ListVisible : { display: 'none' }}>
                    <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={true}>
                        <View style={DropDownStyle.ListContent}>
                            {props.data?.map((item) => (
                                <TouchableOpacity key={item.value} onPress={() => ChooseThisOption(item)}>
                                    <Text style={DropDownStyle.Option}>
                                        {item.label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            )}
        </View>

    )
}
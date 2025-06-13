import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";


const Option = ({ Icon: Icon, Label = '', Type: Type }) => {
    return (
        <View style={Style.Option}>
            <View style={Style.IconPlace}>
                <Icon />
            </View>
            <View style={Style.GBAndOPTxT}>
                <View style={Style.OpTLabel}>
                    <Text style={Style.OptionTxT}><Label /></Text>
                </View>
                <TouchableOpacity style={Style.GenericButton}>
                    <View style={Style.Ball}></View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    Option: {
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        alignItems: 'center',
        paddingVertical: 5,
    },
    IconPlace: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    GBAndOPTxT: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 8,
        borderBottomWidth: 0.5
    },
    OpTLabel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    OptionTxT: {
        fontSize: Text_Sizes.body,
    },
    GenericButton: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: Secondary_Colors.White70,
        width: 100,
        borderRadius: 100,
    },
    Ball: {
        width: 40,
        height: 40,
        borderRadius: '100%',
        backgroundColor: Primmary_Colors.Azure
    }
})

export default Option;
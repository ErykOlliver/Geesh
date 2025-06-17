import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Primmary_Colors, Secondary_Colors } from '../../DesigneTokens/pallets';
import { Text_Sizes } from '../../DesigneTokens/metrics';
import { Geesh_Fonts } from '../../DesigneTokens/fonts';

const data = [
    { label: 'English', value: '1' },
    { label: 'Português', value: '2' },
];

const DropdownComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: Primmary_Colors.Azure, borderWidth: 0.5 }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    dropdown: {
        height: 40,
        width: 150,
        backgroundColor: Secondary_Colors.White70,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    label: {
        position: 'absolute',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    selectedTextStyle: {
        fontSize: 16,
        fontSize: Text_Sizes.h5,
        fontFamily: Geesh_Fonts.InriaRegular
    },
});
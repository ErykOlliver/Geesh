import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Primmary_Colors, Secondary_Colors } from '../../DesigneTokens/pallets.js';
import { Text_Sizes } from '../../DesigneTokens/metrics.js';
import { Geesh_Fonts } from '../../DesigneTokens/fonts.js';

type options = {
    op: any[]
}

type props = {

}



const DropdownComponent = (options: options) => {
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
        <View>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: Primmary_Colors.Azure, borderWidth: 0.5 }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={options.op}
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
        fontFamily: Geesh_Fonts.InriaRegular
    },
});
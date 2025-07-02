import React from 'react';
import { View, Text } from 'react-native';
import HomeStyle from '../style/HomeStyle';
import { Notification01FreeIcons } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import {Icon_Sizes} from "../../../components/DesigneTokens/metrics";


export default function Header() {
    return (
        <View style={HomeStyle.Header}>
        <Text style={HomeStyle.Title}>Home</Text>
        <HugeiconsIcon size={Icon_Sizes.IconL} icon={Notification01FreeIcons}/>
        </View>
    )
}
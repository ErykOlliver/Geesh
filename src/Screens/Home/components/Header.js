import React from 'react';
import { View, Text } from 'react-native';
import HomeStyle from '../style/HomeStyle';
import { Notification01FreeIcons } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Icon_Sizes } from "../../../components/DesigneTokens/metrics";
import { Shadow } from 'react-native-shadow-2';


export default function Header() {
    return (
        <Shadow distance={2.5} offset={[0, 1.5]} startColor='rgba(0, 0, 0, 0.05)' style={HomeStyle.Header}>
            <View style={HomeStyle.H_Content}>
                <Text style={HomeStyle.HomeTitle}>Home</Text>
                <HugeiconsIcon size={Icon_Sizes.Icon3xl} icon={Notification01FreeIcons} />
            </View>
        </Shadow>
    )
}
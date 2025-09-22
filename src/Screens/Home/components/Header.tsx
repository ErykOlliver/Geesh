import React from 'react';
import { View, Text } from 'react-native';
import HomeStyle from '../style/HomeStyle';
import { Icon_Size, Screen_Size } from "../../../components/DesigneTokens/metrics";
import { Shadow } from 'react-native-shadow-2';
import { useTranslation } from 'react-i18next';
import { Bell } from 'lucide-react-native';


export default function Header() {
    const { t, i18n } = useTranslation();
    return (
        <Shadow distance={2.5} offset={[0, 1.5]} startColor='rgba(0, 0, 0, 0.05)' style={HomeStyle.Header}>
            <View style={HomeStyle.H_Content}>
                <Text style={HomeStyle.HomeTitle}>{t("Inicio")}</Text>
                <Bell size={Icon_Size.Icon3xl} strokeWidth={4 * (Screen_Size.width / 1080)} />
            </View>
        </Shadow>
    )
}
import React from 'react';
import { View, Text } from 'react-native';
import HomeStyle from '../style/HomeStyle';
import { Icon_Size, Screen_Size } from "../../../components/DesigneTokens/metrics";
import { Shadow } from 'react-native-shadow-2';
import { useTranslation } from 'react-i18next';
import { Bell } from 'lucide-react-native';
import { useTheme } from '../../../components/DesigneTokens/themeContext';


export default function Header() {
    const { t } = useTranslation();
    const { theme } = useTheme()
    return (
        <Shadow distance={2.5} offset={[0, 1.5]} startColor='rgba(0, 0, 0, 0.05)' style={[HomeStyle.Header, { backgroundColor: theme.surface }]}>
            <View style={HomeStyle.H_Content}>
                <Text style={[HomeStyle.HomeTitle, { color: theme.text }]}>{t("Inicio")}</Text>
                <Bell size={Icon_Size.Icon3xl} color={theme.text} strokeWidth={4 * (Screen_Size.width / 1080)} />
            </View>
        </Shadow>
    )
}
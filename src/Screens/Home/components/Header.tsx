import React from 'react';
import { View, Text, Alert } from 'react-native';
import HomeStyle from '../style/HomeStyle';
import { Icon_Size, Screen_Size } from "../../../components/DesigneTokens/metrics";
import { Shadow } from 'react-native-shadow-2';
import { useTranslation } from 'react-i18next';
import { Bell } from 'lucide-react-native';
import { usePushNotification } from '../../../scripts/usePushNotification';

export default function Header() {
    const { t, i18n } = useTranslation();
    const { notifications, clearNotifications } = usePushNotification();

    const notificationCount = notifications.length;

    return (
        <Shadow distance={2.5} offset={[0, 1.5]} startColor='rgba(0, 0, 0, 0.05)' style={HomeStyle.Header}>
            <View style={HomeStyle.H_Content}>
                <Text style={HomeStyle.HomeTitle}>{t("Inicio")}</Text>
                <View style={{ position: 'relative' }}>
                    <Text
                        onPress={clearNotifications}
                        style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 20 }}
                    />
                    <Bell size={Icon_Size.Icon3xl} strokeWidth={4 * (Screen_Size.width / 1080)} />
                    {notificationCount > 0 && (
                        <View style={HomeStyle.badge}>
                            <Text style={HomeStyle.badgeText}>{notificationCount}</Text>
                        </View>
                    )}
                </View>
            </View>
        </Shadow>
    )
}


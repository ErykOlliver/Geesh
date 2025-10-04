import React from 'react';
import { View, Text, Alert } from 'react-native';
import HomeStyle from '../style/HomeStyle';
import { Icon_Size, Screen_Size } from "../../../components/DesigneTokens/metrics";
import { Shadow } from 'react-native-shadow-2';
import { useTranslation } from 'react-i18next';
import { Bell } from 'lucide-react-native';
import {usePushNotification} from '../../../scripts/usePushNotification';
import style from '../../../components/ChartsBase/BarChart/style/style';
import { StyleSheet } from 'react-native';

export default function Header() {
    const { t, i18n } = useTranslation();
    const{expoPushtoken,notification} = usePushNotification();
    const data = JSON.stringify(notification,undefined,2);

    React.useEffect(() => {
        if (notification) {
            Alert.alert('Nova Notificação', notification.request.content.body ?? 'Você recebeu uma notificação!');
        }
    }, [notification]);

    return (
        <Shadow distance={2.5} offset={[0, 1.5]} startColor='rgba(0, 0, 0, 0.05)' style={HomeStyle.Header}>
            <View style={HomeStyle.H_Content}>
                <Text style={HomeStyle.HomeTitle}>{t("Inicio")}</Text>
                <Bell size={Icon_Size.Icon3xl} strokeWidth={4 * (Screen_Size.width / 1080)} />
            </View>
            <View style={styles.container}>
                  <Text>Token: {expoPushtoken?.data ?? "fefef"}</Text>
                  <Text>{data}</Text>
            </View>
        </Shadow>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});
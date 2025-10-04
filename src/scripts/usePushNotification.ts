import { useState,useEffect,useRef } from "react";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { Platform } from "react-native";

export interface PushNotificationState{
 notification?: Notifications.Notification;
 expoPushtoken?: Notifications.ExpoPushToken;
}
    export const usePushNotification = (): PushNotificationState => {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false,
            shouldShowBanner: true,
            shouldShowList: true,
        }),
    });
    
    const [expoPushtoken, setExpoPushToken] = useState<Notifications.ExpoPushToken | undefined>();
    const [notification, setNotification] = useState<Notifications.Notification | undefined>();

    const notificationListener = useRef<Notifications.EventSubscription | null>(null);
    const responseListener = useRef<Notifications.EventSubscription | null>(null);

    async function RegisterPushNotificationAsync() {
        let token;

        if(Device.isDevice){
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if(existingStatus !== 'granted'){
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if(finalStatus !== 'granted'){
                alert('falha ao obter permissão para notificações push!');
                return;
            }
            token = await Notifications.getExpoPushTokenAsync({
                projectId: Constants.expoConfig?.extra?.eas?.projectId
            });
            if(Platform.OS === 'android'){
                Notifications.setNotificationChannelAsync("default",{
                    name: "default",
                    importance: Notifications.AndroidImportance.MAX,
                    vibrationPattern: [0, 250, 250, 250],
                    lightColor: '#FF231F7C',
                });
            }
            return token;
        } else {
            console.log('Use um dispositivo fisico para receber notificações');
        }
    }

    useEffect(() => {
        RegisterPushNotificationAsync().then(token => setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
            setNotification(notification);
        });

        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            if(notificationListener.current){
                notificationListener.current.remove();
            }
            if(responseListener.current){
                responseListener.current.remove();
            }
        };
    }, []);

    return {
        notification,
        expoPushtoken
    };
};
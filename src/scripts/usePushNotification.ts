import { useState, useEffect, useRef } from "react";
import * as Notifications from 'expo-notifications';

export interface PushNotificationState {
  notifications: Notifications.Notification[];
  clearNotifications: () => void;
  sendLocalNotification: (title: string, body: string, data?: Record<string, any>) => Promise<void>;
}

export const usePushNotification = (): PushNotificationState => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });

  const [notifications, setNotifications] = useState<Notifications.Notification[]>([]);

  async function sendLocalNotification(title: string, body: string, data: Record<string, any> = {}) {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title,
          body,
          data,
          sound: 'default',
        },
        trigger: null,
      });
    } catch (e) {
      console.warn('Erro ao enviar notificação local:', e);
    }
  }

  const notificationListener = useRef<Notifications.EventSubscription | null>(null);
  const responseListener = useRef<Notifications.EventSubscription | null>(null);

  const clearNotifications = () => setNotifications([]);

  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      setNotifications(prev => [...prev, notification]);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      if (notificationListener.current) {
        notificationListener.current.remove();
      }
      if (responseListener.current) {
        responseListener.current.remove();
      }
    };
  }, []);

  return {
    notifications,
    clearNotifications,
    sendLocalNotification
  };
};
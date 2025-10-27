import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Image, Animated, Easing } from 'react-native';
import HomeStyle from '../style/HomeStyle';
import { LinearGradient } from "expo-linear-gradient";
import { Icon_Size } from "../../../components/DesigneTokens/metrics";
import { Shadow } from 'react-native-shadow-2';
import { useTranslation } from 'react-i18next';
import { Geesh_Primmary_Colors } from '../../../components/DesigneTokens/pallets';
import { usePushNotification } from '../../../scripts/usePushNotification';

export default function Panel() {
  const { sendLocalNotification } = usePushNotification();
  const notifiedRef = useRef(false);

  const DefaultBatteryGradient: [string, string] = [
    Geesh_Primmary_Colors.BluishWhite,
    Geesh_Primmary_Colors.Azure
  ];
  const DischargingGradient: [string, string] = ['#FF6B6B', '#C62828']; 

  const { t, i18n } = useTranslation();

  const progress = useRef(new Animated.Value(0)).current;
  const [batteryWidth, setBatteryWidth] = useState(0);
  const [isDischarging, setIsDischarging] = useState(false);
  const prevProgressRef = useRef(0);

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(progress, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false
        }),
        Animated.timing(progress, {
          toValue: 0.05,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false
        })
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [progress]);

  const LOW_THRESHOLD = 0.20;  
  const HIGH_THRESHOLD = 0.18; 

  useEffect(() => {
    const id = progress.addListener(({ value }) => {
      const prev = prevProgressRef.current;
  
      if (value < LOW_THRESHOLD && value < prev - 0.001) {
        setIsDischarging(true);

      } else if (value > HIGH_THRESHOLD) {
        setIsDischarging(false);
      }
      prevProgressRef.current = value;
    });
    return () => {
      progress.removeListener(id);
    };
  }, [progress]);

  useEffect(() => {
    if (isDischarging && !notifiedRef.current) {
      sendLocalNotification('Bateria baixa', 'A bateria está descarregando. Por favor, desative a bateria para recarregá-la.');
      notifiedRef.current = true;
    } else if (!isDischarging) {
      notifiedRef.current = false;
    }
  }, [isDischarging, sendLocalNotification]);

  const animatedWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, batteryWidth || 0] 
  });

  const BatteryGradient = isDischarging ? DischargingGradient : DefaultBatteryGradient;
  
  return (

    <Shadow distance={3.5} offset={[0, 1.5]} startColor='rgba(0, 0, 0, 0.08)' endColor='rgba(0, 0, 0, 0)' style={HomeStyle.Panel}>
      <Text style={HomeStyle.BatteryTitle}>{t("titulo Painel")}</Text>
      <View
        style={HomeStyle.Battery}
        onLayout={(e) => setBatteryWidth(e.nativeEvent.layout.width)}
      >
        <View style={HomeStyle.BatteryInnerShadow}></View>

        <View style={{ position: 'absolute', width: '100%', height: '100%', alignItems: 'flex-start' }}>
          <Animated.View style={{ width: animatedWidth, height: '100%', overflow: 'hidden' }}>
            <LinearGradient colors={BatteryGradient} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} style={[HomeStyle.BatteryEnergy, { width: '100%' }]} />
          </Animated.View>
        </View>

        <Image source={require('../../../../assets/icons/EnergyIcon.png')} style={{ width: Icon_Size.Icon5xl, height: Icon_Size.Icon5xl }} />
      </View>

      <View style={HomeStyle.BatteryInfoPlace}>
        <View style={HomeStyle.BatteryInfo}>
          <Text style={HomeStyle.Info}>{t("status_bateria")}:</Text>
          <Text style={HomeStyle.Status}>{t("ativo")}</Text>
        </View>
        <View style={HomeStyle.BatteryInfo}>
          <Text style={HomeStyle.Info}>{t("energia_disponivel")}:</Text>
          <Text style={HomeStyle.Status}>{t("ativo")}</Text>
        </View>
        <View style={HomeStyle.BatteryInfo}>
          <Text style={HomeStyle.Info}>{t("taxa_uso")}:</Text>
          <Text style={HomeStyle.Status}>{t("ativo")}</Text>
        </View>
        <View style={HomeStyle.BatteryInfo}>
          <Text style={HomeStyle.Info}>{t("tempo_estimado")}:</Text>
          <Text style={HomeStyle.Status}>{t("ativo")}</Text>
        </View>
        <View style={HomeStyle.BatteryInfo}>
          <Text style={HomeStyle.Info}>{t("ultimo_uso")}:</Text>
          <Text style={HomeStyle.Status}>{t("ativo")}</Text>
        </View>
      </View>
    </Shadow>
  );
}
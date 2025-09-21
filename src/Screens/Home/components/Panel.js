import React from 'react';
import { View, Text, Image } from 'react-native';
import HomeStyle from '../style/HomeStyle';
import { LinearGradient } from "expo-linear-gradient";
import { Icon_Size } from "../../../components/DesigneTokens/metrics";
import { EnergyIcon, ZapIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Shadow } from 'react-native-shadow-2';
import { useTranslation } from 'react-i18next';
import { Geesh_Primmary_Colors } from '../../../components/DesigneTokens/pallets';

export default function Panel() {
  const BatteryGradient = [
    Geesh_Primmary_Colors.BluishWhite,
    Geesh_Primmary_Colors.Azure
  ]
  const { t, i18n } = useTranslation();
  return (

    <Shadow distance={3.5} offset={[0, 1.5]} startColor='rgba(0, 0, 0, 0.08)' endColor='rgba(0, 0, 0, 0)' style={HomeStyle.Panel}>
      <Text style={HomeStyle.BatteryTitle}>{t("titulo Painel")}</Text>
      <View style={HomeStyle.Battery}>
        <View style={HomeStyle.BatteryInnerShadow}></View>
        <View style={{ position: 'absolute', width: '100%', height: '100%', alignItems: 'flex-start' }}>
          <LinearGradient colors={BatteryGradient} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} style={HomeStyle.BatteryEnergy} />
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
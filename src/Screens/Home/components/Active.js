import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HomeStyle from '../style/HomeStyle';
import { useTranslation } from 'react-i18next';
import { Geesh_Primmary_Colors, Geesh_Secondary_Colors } from '../../../components/DesigneTokens/pallets.js';


const ActiveBatteryGradient = [
  Geesh_Primmary_Colors.BluishWhite,
  Geesh_Primmary_Colors.Azure
]

const IndicatorGradient = [
  Geesh_Secondary_Colors.AuroraGreen,
  Geesh_Secondary_Colors.VitalGreen
]

export default function Active() {
  const { t, i18n } = useTranslation();
  return (
    <View style={HomeStyle.ActivePlace}>
      <View style={HomeStyle.Indicator}> <LinearGradient colors={IndicatorGradient} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={HomeStyle.IndicatorGradient} /></View>
      <TouchableOpacity style={HomeStyle.ActiveButton}>
        <LinearGradient colors={ActiveBatteryGradient} start={{ x: 0.5, y: -0.5 }} end={{ x: 0.5, y: 1 }} style={HomeStyle.ActiveBatteryGradient} />
        <Text style={HomeStyle.ActiveButtonText}>{t("botao_ativar")}</Text>
      </TouchableOpacity>

      <Text style={HomeStyle.devices}>{t("gerenciar_dispositivos")} <Text style={HomeStyle.devicesMark}>{t("dispositivos")}</Text></Text>
    </View>
  );
}
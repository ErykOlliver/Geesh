import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HomeStyle from '../style/HomeStyle';
import { useTranslation } from 'react-i18next';
import { Geesh_Primmary_Colors, Geesh_Secondary_Colors } from '../../../components/DesigneTokens/pallets';
import { BatteryActive, subscribeBatteryActive } from '../../../scripts/batteryController';
import { Power, Droplets, Columns3Cog } from 'lucide-react-native';
import { Icon_Size } from '../../../components/DesigneTokens/metrics';

const ActiveBatteryGradient: [string, string] = [
  Geesh_Primmary_Colors.BluishWhite,
  Geesh_Primmary_Colors.Azure
]

const IndicatorGradient: [string, string] = [
  Geesh_Secondary_Colors.AuroraGreen,
  Geesh_Secondary_Colors.VitalGreen
]

export default function Active() {
  const { t, i18n } = useTranslation();

  const [isBatteryActive, setIsBatteryActive] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeBatteryActive(setIsBatteryActive);
    return unsubscribe;
  }, []);

  const indicatorColor = isBatteryActive ? IndicatorGradient : ['#FF6B6B', '#C62828'];

  return (
    <View style={HomeStyle.ActiveContainer}>

      <View style={HomeStyle.Indicator}>
        <LinearGradient colors={indicatorColor} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={HomeStyle.IndicatorGradient} />
      </View>

      <View style={HomeStyle.ActivePlace}>
        
        <TouchableOpacity style={HomeStyle.OthersButton}>
          <LinearGradient colors={ActiveBatteryGradient} start={{ x: 0.5, y: -0.5 }} end={{ x: 0.5, y: 1 }} style={HomeStyle.ActiveBatteryGradient} />
          <Droplets size={Icon_Size.Icon3xl} color='white' />
        </TouchableOpacity>

        <TouchableOpacity style={HomeStyle.ActiveButton} onPress={BatteryActive}>
          <LinearGradient colors={ActiveBatteryGradient} start={{ x: 0.5, y: -0.5 }} end={{ x: 0.5, y: 1 }} style={HomeStyle.ActiveBatteryGradient} />
          <Power size={Icon_Size.Icon3xl} color='white' />
        </TouchableOpacity>

        <TouchableOpacity style={HomeStyle.OthersButton}>
          <LinearGradient colors={ActiveBatteryGradient} start={{ x: 0.5, y: -0.5 }} end={{ x: 0.5, y: 1 }} style={HomeStyle.ActiveBatteryGradient} />
          <Columns3Cog size={Icon_Size.Icon3xl} color='white' />
        </TouchableOpacity>

      </View>
    </View>
  );
}
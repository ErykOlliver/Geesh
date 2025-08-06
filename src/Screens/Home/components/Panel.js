import React from 'react';
import { View, Text, Image } from 'react-native';
import HomeStyle from '../style/HomeStyle';
import { Primmary_Colors } from "../../../components/DesigneTokens/pallets";
import { LinearGradient } from "expo-linear-gradient";
import { Icon_Size } from "../../../components/DesigneTokens/metrics.js";
import { EnergyIcon, ZapIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Shadow } from 'react-native-shadow-2';

export default function Panel() {
  const BatteryGradient = [
    Primmary_Colors.BluishWhite,
    Primmary_Colors.Azure
  ]

  return (

    <Shadow distance={3.5} offset={[0, 1.5]} startColor='rgba(0, 0, 0, 0.08)' endColor='rgba(0, 0, 0, 0)' style={HomeStyle.Panel}>
      <Text style={HomeStyle.BatteryTitle}>Battery Panel</Text>
      <View style={HomeStyle.Battery}>
        <View style={HomeStyle.BatteryInnerShadow}></View>
        <View style={{ position: 'absolute', width: '100%', height: '100%', alignItems: 'flex-start' }}>
          <LinearGradient colors={BatteryGradient} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} style={HomeStyle.BatteryEnergy} />
        </View>
        <Image source={require('../../../../assets/icons/EnergyIcon.png')} style={{ width: Icon_Size.Icon5xl, height: Icon_Size.Icon5xl }} />
      </View>

      <View style={HomeStyle.BatteryInfoPlace}>
        <View style={HomeStyle.BatteryInfo}>
          <Text style={HomeStyle.Info}>Battery status:</Text>
          <Text style={HomeStyle.Status}>Active</Text>
        </View>
        <View style={HomeStyle.BatteryInfo}>
          <Text style={HomeStyle.Info}>Available energy:</Text>
          <Text style={HomeStyle.Status}>Active</Text>
        </View>
        <View style={HomeStyle.BatteryInfo}>
          <Text style={HomeStyle.Info}>Usage rate:</Text>
          <Text style={HomeStyle.Status}>Active</Text>
        </View>
        <View style={HomeStyle.BatteryInfo}>
          <Text style={HomeStyle.Info}>Estimated runtime:</Text>
          <Text style={HomeStyle.Status}>Active</Text>
        </View>
        <View style={HomeStyle.BatteryInfo}>
          <Text style={HomeStyle.Info}>Last used:</Text>
          <Text style={HomeStyle.Status}>Active</Text>
        </View>
      </View>
    </Shadow>
  );
}
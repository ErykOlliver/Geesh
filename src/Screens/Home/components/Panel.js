import React from 'react';
import { View, Text, Image } from 'react-native';
import HomeStyle from '../style/HomeStyle';
import { Primmary_Colors } from "../../../components/DesigneTokens/pallets";
import { LinearGradient } from "expo-linear-gradient";
import { Icon_Sizes } from "../../../components/DesigneTokens/metrics";
import { EnergyIcon, ZapIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Shadow } from 'react-native-shadow-2';

export default function Panel() {
  const BatteryGradient = [
    Primmary_Colors.BluishWhite,
    Primmary_Colors.Azure
  ]

  const StartPos = {
    x: 1,
    y: 0
  }

  const EndPos = {
    x: 0,
    y: 0
  }
  return (

    <Shadow distance={5} offset={[0, 2]} startColor='rgba(0, 0, 0, 0.15)' endColor='rgba(0, 0, 0, 0)' style={HomeStyle.Panel}>
      <Text style={HomeStyle.BatteryTitle}>Battery Panel</Text>
      <View style={HomeStyle.Battery}>
        <View style={HomeStyle.BatteryInnerShadow}></View>
        <View style={{ position: 'absolute', width: '100%', height: '100%', alignItems: 'flex-start' }}>
          <LinearGradient colors={BatteryGradient} start={StartPos} end={EndPos} style={HomeStyle.BatteryEnergy} />
        </View> 
        <Image source={require('../../../img/icons/EnergyIcon.png')} style={{ width: Icon_Sizes.Icon5xl, height: Icon_Sizes.Icon5xl }} />
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
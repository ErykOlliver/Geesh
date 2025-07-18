import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Geesh_Primmary_Colors, Geesh_Secondary_Colors } from '../../../components/DesigneTokens/pallets';
import { LinearGradient } from 'expo-linear-gradient';
import HomeStyle from '../style/HomeStyle';


const ActiveBatteryGradient = [
  Geesh_Primmary_Colors.BluishWhite,
  Geesh_Primmary_Colors.Azure
]

const IndicatorGradient = [
  Geesh_Secondary_Colors.AuroraGreen,
  Geesh_Secondary_Colors.VitalGreen
]

export default function Active() {
  return (
    <View style={HomeStyle.ActivePlace}>
      <View style={HomeStyle.Indicator}> <LinearGradient colors={IndicatorGradient} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={HomeStyle.ActiveBatteryGradient} /> </View>
      <TouchableOpacity style={HomeStyle.ActiveButton}>
        <LinearGradient colors={ActiveBatteryGradient} start={{ x: 0.5, y: -0.5 }} end={{ x: 0.5, y: 1 }} style={HomeStyle.ActiveBatteryGradient} />
        <Text style={HomeStyle.ActiveButtonText}>activate battery</Text>
      </TouchableOpacity>

      <Text style={HomeStyle.devices}>Manage connected <Text style={HomeStyle.devicesMark}>devices</Text></Text>
    </View>
  );
}

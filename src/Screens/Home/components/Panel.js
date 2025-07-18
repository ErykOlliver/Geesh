import React from 'react';
import { View, Text } from 'react-native';
import HomeStyle from '../style/HomeStyle';
import { Primmary_Colors } from "../../../components/DesigneTokens/pallets";
import { LinearGradient } from "expo-linear-gradient";
import { Icon_Sizes } from "../../../components/DesigneTokens/metrics";
import { ZapIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';

export default function Panel() {
  return (
    <View style={HomeStyle.Painel}>
      <Text style={HomeStyle.bateriaTitulo}>Battery panel</Text>
      <View style={HomeStyle.bateria}>
        <LinearGradient
          colors={[Primmary_Colors.BluishWhite, Primmary_Colors.Azure]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: 10 }}
        />
        <HugeiconsIcon icon={ZapIcon} size={Icon_Sizes.IconXL} color="#FFFFFF" fill="#DCDCDC" />
      </View>

      <View style={HomeStyle.row}>
        <Text style={HomeStyle.status}>Battery status:</Text>
        <Text style={HomeStyle.valor}>Active</Text>
      </View>
      <View style={HomeStyle.row}>
        <Text style={HomeStyle.status}>Available energy:</Text>
        <Text style={HomeStyle.valor}>Active</Text>
      </View>
      <View style={HomeStyle.row}>
        <Text style={HomeStyle.status}>Usage rate:</Text>
        <Text style={HomeStyle.valor}>Active</Text>
      </View>
      <View style={HomeStyle.row}>
        <Text style={HomeStyle.status}>Estimated runtime:</Text>
        <Text style={HomeStyle.valor}>Active</Text>
      </View>
      <View style={HomeStyle.row}>
        <Text style={HomeStyle.status}>Last used:</Text>
        <Text style={HomeStyle.valor}>Active</Text>
      </View>
    </View>
  );
}
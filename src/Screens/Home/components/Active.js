import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Primmary_Colors } from '../../../components/DesigneTokens/pallets';
import { LinearGradient } from 'expo-linear-gradient';
import HomeStyle from '../style/HomeStyle';

export default function Active() {
  return (
    <View style={HomeStyle.Titulo}>
      <View style={HomeStyle.circulo} />

      <TouchableOpacity style={HomeStyle.btn}>
        <LinearGradient
          colors={[ Primmary_Colors.BluishWhite , Primmary_Colors.Azure]} 
          start={{ x: 0.5, y: -0.5}}
          end={{ x: 0.5, y: 1 }}
          style={HomeStyle.btnGradient}
        >
          <Text style={HomeStyle.btnText}>activate battery</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={HomeStyle.texto}>
        Manage connected <Text style={HomeStyle.cor}>devices</Text>
      </Text>
    </View>
  );
}

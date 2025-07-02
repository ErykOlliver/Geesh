import React from 'react';
import { View, Text } from 'react-native';
import HomeStyle from '../style/HomeStyle';


export default function Painel() {
return (
      <View style={HomeStyle.Painel}>
        <Text style={HomeStyle.bateriaTitulo}>Battery panel</Text>
        <View style={HomeStyle.bateria}></View>

        <View style={HomeStyle.row}>
          <Text style={HomeStyle.status}>Battery status:</Text>
          <Text style={HomeStyle.valor}>Active</Text>
        </View>
        <View style={HomeStyle.row}>
          <Text style={HomeStyle.status}>Availble energy:</Text>
          <Text style={HomeStyle.valor}>Availble</Text>
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
)
}
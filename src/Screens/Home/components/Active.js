import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeStyle from '../style/HomeStyle';



export default function Active() {
return (
          <View style={HomeStyle.Titulo}>
            <View style={HomeStyle.circulo} />
            <TouchableOpacity style={HomeStyle.btn}>
              <Text style={HomeStyle.btnText}>activate battery</Text>
            </TouchableOpacity>
            <Text style={HomeStyle.texto}>
              Manage connected <Text style={HomeStyle.cor}>Devices</Text>
            </Text>
          </View>
)

}
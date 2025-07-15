import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LoginStyle from '../style/LoginStyle';

export default function Bot() {
return (
          <View style={LoginStyle.Inferior}>
            <TouchableOpacity style={LoginStyle.btn}>
              <Text style={LoginStyle.btnText}>Enter Geesh</Text>
            </TouchableOpacity>
            <Text style={LoginStyle.texto}>
              Forgot your Password? <Text style={LoginStyle.cor}> Recover it here</Text>
            </Text>
          </View>
)

}
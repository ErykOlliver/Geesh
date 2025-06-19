import React from "react"
import { View, Text, TouchableOpacity } from "react-native";
import HomeStyle from "./style/HomeStyle"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function Home() {
 return (
      <View style={HomeStyle.Main}>
        <View style={HomeStyle.Header}>
        <Text style={HomeStyle.Title}>Home</Text>
        </View>
      
    <View style={HomeStyle.body}>
      <View style={HomeStyle.Painel}>
        <Text style={HomeStyle.bateriaTitulo}>Battery panel</Text>
        <View style={HomeStyle.bateria}></View>

        <View style={HomeStyle.row}>
          <Text style={HomeStyle.status}>Battery status:</Text>
          <Text style={HomeStyle.valor}>Active</Text>
        </View>
        <View style={HomeStyle.row}>
          <Text style={HomeStyle.status}>Availble energy:</Text>
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

      <View style={HomeStyle.Titulo}>
        <View style={HomeStyle.circulo} />
        <TouchableOpacity style={HomeStyle.btn}>
          <Text style={HomeStyle.btnText}>activate battery</Text>
        </TouchableOpacity>
        <Text style={HomeStyle.texto}>
          Manage connected <Text style={HomeStyle.cor}>Devices</Text>
        </Text>
      </View>
    </View>
    </View>
  );
}
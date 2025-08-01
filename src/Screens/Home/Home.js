import React from "react"
import { View } from "react-native";
import HomeStyle from "./style/HomeStyle"
import Header from "./components/Header";
import Painel from "./components/Panel";
import Active from "./components/Active";
import MainContent from "./components/MainContent";
import { Geesh_Primmary_Colors } from "../../components/DesigneTokens/pallets";


export default function Home() {
  return (
    <View style={HomeStyle.Body}>
      <Header />
      <MainContent />
    </View>
  );
}
import React from "react"
import { View } from "react-native";
import HomeStyle from "./style/HomeStyle"
import Header from "./components/Header";
import Painel from "./components/Panel";
import Active from "./components/Active";
import MainContent from "./components/MainContent";



export default function Home() {
  return (
    <View style={HomeStyle.Body}>
      <Header />
      <MainContent />
    </View>
  );
}
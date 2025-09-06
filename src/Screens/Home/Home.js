import React from "react"
import { View } from "react-native";
import HomeStyle from "./style/HomeStyle.js"
import Header from "./components/Header.js";
import Painel from "./components/Panel.js";
import Active from "./components/Active.js";
import MainContent from "./components/MainContent.js";



export default function Home() {
  return (
    <View style={HomeStyle.Body}>
      <Header />
      <MainContent />
    </View>
  );
}
import React from "react"
import { View } from "react-native";
import HomeStyle from "./style/HomeStyle"
import Header from "./components/Header";
import Painel from "./components/Painel";
import Active from "./components/Active";

export default function Home() {
  return (
    <View style={HomeStyle.Body}>
      <Header />
      <Painel />
      <Active />
    </View>
  );
}
import React from "react"
import { View } from "react-native";
import HomeStyle from "./style/HomeStyle"
import Header from "./components/Header";
import MainContent from "./components/MainContent";


export default function Home() {
  return (
    <View style={HomeStyle.Body}>
      <Header />
      <MainContent />
    </View>
  );
}
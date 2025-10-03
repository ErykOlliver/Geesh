import React from "react"
import { View } from "react-native";
import HomeStyle from "./style/HomeStyle"
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useTheme } from "../../components/DesigneTokens/themeContext";

export default function Home() {
  const { theme } = useTheme();
  return (
    <View style={[HomeStyle.Body, { backgroundColor: theme.background }]}>
      <Header />
      <MainContent />
    </View>
  );
}
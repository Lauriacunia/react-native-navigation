import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Titulo from "./src/components/Titulo";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>App con React Native</Text>
        <Titulo titulo="piso el titulo default" />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

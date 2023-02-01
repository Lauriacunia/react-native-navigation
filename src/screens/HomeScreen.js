import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.titulo}>Soy home</Text>
      <Text style={styles.titulo}>Soy home</Text>
      <Text style={styles.titulo}>Soy home</Text>
      <Text style={styles.titulo}>Soy home</Text>
      <Text style={styles.titulo}>Soy home</Text>
      <Text style={styles.titulo}>Soy home</Text>
      <Text style={styles.titulo}>Soy home</Text>
      <Text style={styles.titulo}>Soy home</Text>
      <Text style={styles.titulo}>Soy home</Text>
      <Text style={styles.titulo}>Soy home</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
  },
});


import { View, Text , Button, SafeAreaView} from 'react-native'
import React from 'react'
import { StyleSheet } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToPage = (page) => {
    navigation.navigate(page);
  };

  return (
    // safeAreaView evita que el contenido se vea por encima de la barra de estado
    <SafeAreaView>
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
      {/* Importante: envolver la llamada en una arrow funtion-> sino se ejecutara al cargar la pantalla */}
      <Button title="Ir a settings" onPress={() => goToPage("Settings")} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
  },
});


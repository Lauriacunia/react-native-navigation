import React from "react";
import { StyleSheet, Text, View } from "react-native";
import propTypes from "prop-types";

export default function Titulo(props) {
  const { titulo } = props;
  return (
    <View>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
  },
});

Titulo.defaultProps = {
  titulo: "Titulo por defecto",
};

// Valida como si fuera un schema de las propsr
Titulo.propTypes = {
    titulo: propTypes.string,
};

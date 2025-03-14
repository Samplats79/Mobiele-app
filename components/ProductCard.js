import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({ product, navigation }) {
  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price}</Text>

      {/* Wanneer je op de kaart klikt, ga naar de ProductDetail-pagina */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("ProductDetail", { product })} // Dit stuurt het product mee naar de detailpagina
      >
        <Text style={styles.buttonText}>Bekijk product</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: 150, // Kleinere breedte zodat de kaarten goed naast elkaar passen
    margin: 5,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#e63946",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#e63946",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

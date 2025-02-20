import React from "react";
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "LeBron James Tenue",
    description: "Officiële Lakers jersey #23",
    price: "€79,99",
    image: require("../assets/images.jpg"),
  },
  {
    id: 2,
    name: "LeBron James Tenue",
    description: "Officiële Lakers jersey #23",
    price: "€79,99",
    image: require("../assets/images.jpg"),
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Onze Modellen</Text>
      <View style={styles.productContainer}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ProductDetail")}>
        <Text style={styles.buttonText}>Ga naar Details</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  productContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HomeScreen;

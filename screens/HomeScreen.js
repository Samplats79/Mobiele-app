import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "LeBron James Tenue",
    description: "Officiële Lakers jersey #23",
    price: 79.99,  // Dit is nu een nummer in plaats van een string
    image: require("../assets/images.jpg"),
  },
  {
    id: 2,
    name: "Kyrie Irving Tenue",
    description: "Officiële Dallas jersey #2",
    price: 79.99,  // Dit is nu een nummer in plaats van een string
    image: require("../assets/kyrie.jpg"),
  },
  {
    id: 3,
    name: "Stephen Curry Tenue",
    description: "Officiële Warriors jersey #30",
    price: 79.99,  // Dit is nu een nummer in plaats van een string
    image: require("../assets/steph.jpg"),
  },
  {
    id: 4,
    name: "Russel Westbrook Tenue",
    description: "Officiële Clippers jersey #0",
    price: 79.99,  // Dit is nu een nummer in plaats van een string
    image: require("../assets/russel.jpg"),
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Onze Modellen</Text>
      <View style={styles.productContainer}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} navigation={navigation} />
        ))}
      </View>
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
});

export default HomeScreen;

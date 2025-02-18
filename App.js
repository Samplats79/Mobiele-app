import { View, ScrollView, StyleSheet } from "react-native";
import ProductCard from "./ProductCard"; // Zorg dat de import klopt

export default function App() {
  const products = [
    {
      id: 1,
      name: "LeBron James Tenue",
      description: "Officiële Lakers jersey #23",
      price: "€79,99",
      image: require("./assets/images.jpg"), // Zorg dat dit het juiste pad is
    },
    {
      id: 2,
      name: "LeBron James Tenue",
      description: "Officiële Lakers jersey #23",
      price: "€79,99",
      image: require("./assets/images.jpg"),
    },
    {
      id: 3,
      name: "LeBron James Tenue",
      description: "Officiële Lakers jersey #23",
      price: "€79,99",
      image: require("./assets/images.jpg"),
    },
    {
      id: 4,
      name: "LeBron James Tenue",
      description: "Officiële Lakers jersey #23",
      price: "€79,99",
      image: require("./assets/images.jpg"),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
});

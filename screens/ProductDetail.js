import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const ProductDetail = ({ route }) => {
  // Haal de productgegevens op uit de route-parameters
  const { product } = route.params;

  // State voor het aantal producten
  const [quantity, setQuantity] = useState(1);

  // Verhoog de hoeveelheid
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Verlaag de hoeveelheid, maar niet onder 1
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Bereken de totale prijs
  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image source={product.image} style={styles.image} />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>Prijs per stuk: €{product.price}</Text>

        {/* Aantal producten */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Totale prijs */}
        <Text style={styles.totalPrice}>Totaal: €{totalPrice}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: "center",
    width: "100%",
    maxWidth: 500,  // Optioneel: Beperk de maximale breedte voor betere weergave
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: "#e63946",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  quantityText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#e63946",
  },
});
export default ProductDetail;

import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import ProductCard from "../components/ProductCard";

const categoryNames = {
  "": "Alle categorieën",
  "68015b2e97f20da64642e24f": "Backyard",
  "68015ac869800d629b5edc63": "Outside",
  "68015aa913ca18d5b072c6f6": "Inside",
};

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");

  useEffect(() => {
    fetch("https://api.webflow.com/v2/sites/67b5ee01d2d266ffba9ef91e/products", {
      headers: {
        Authorization:
          "Bearer 3dbe01b3f32172c80e2d238a779248b5d28da76fde6272e7e1bbb76d9ebff485",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.items.map((item) => ({
            id: item.product.id,
            name: item.product.fieldData.name,
            description: item.product.fieldData.description,
            price: (item.skus?.[0]?.fieldData?.price?.value || 0) / 100,
            image: { uri: item.skus?.[0]?.fieldData?.["main-image"]?.url },
            category:
              categoryNames[item.product.fieldData.category?.[0]] || "Onbekend",
          }))
        );
      })
      .catch((err) => console.error("Error", err));
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "" ||
        p.category === categoryNames[selectedCategory]) &&
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Onze Modellen</Text>

      {/* Zoek en filter */}
      <View style={styles.controls}>
        <TextInput
          style={styles.searchInput}
          placeholder="Zoek een model..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value)}
          style={styles.picker}
        >
          {Object.entries(categoryNames).map(([id, name]) => (
            <Picker.Item key={id} label={name} value={id} />
          ))}
        </Picker>

        {/* Sorteer dropdown */}
        <Picker
          selectedValue={sortOption}
          onValueChange={(value) => setSortOption(value)}
          style={styles.picker}
        >
          <Picker.Item label="Prijs (laag → hoog)" value="price-asc" />
          <Picker.Item label="Prijs (hoog → laag)" value="price-desc" />
          <Picker.Item label="Naam (A → Z)" value="name-asc" />
          <Picker.Item label="Naam (Z → A)" value="name-desc" />
        </Picker>
      </View>

      {/* Producten weergeven */}
      <View style={styles.productContainer}>
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            navigation={navigation}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  controls: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    color: "#000",
  },
  picker: {
    height: 50,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  productContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default HomeScreen;

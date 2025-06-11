import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function BlogCard({ blog, navigation }) {
  return (
    <View style={styles.card}>
      {blog.image && (
        <Image source={{ uri: blog.image }} style={styles.image} />
      )}
      <Text style={styles.title}>{blog.title}</Text>
      <Text numberOfLines={2} style={styles.summary}>{blog.summary}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BlogDetail", { blog })}
      >
        <Text style={styles.buttonText}>Lees meer</Text>
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
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  summary: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function BlogCard({ blog, navigation }) {
  return (
    <View style={styles.card}>
      {blog.image ? (
        <Image source={{ uri: blog.image }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.imagePlaceholder]}>
          <Text style={{ color: "#aaa" }}>Geen afbeelding</Text>
        </View>
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
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: "90%",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "cover",
  },
  imagePlaceholder: {
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
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
    backgroundColor: "#e63946",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

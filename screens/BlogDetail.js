import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const BlogDetail = ({ route }) => {
  const { blog } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{blog.title || "Geen titel"}</Text>

      {blog.image ? (
        <Image source={{ uri: blog.image }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={{ color: "#aaa" }}>Geen afbeelding</Text>
        </View>
      )}

      <Text style={styles.summary}>
        {blog.summary || "Geen samenvatting beschikbaar."}
      </Text>

      <Text style={styles.content}>
        {blog.content || "Geen inhoud beschikbaar."}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#222",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 15,
  },
  placeholder: {
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  summary: {
    fontSize: 16,
    color: "#555",
    fontStyle: "italic",
    marginBottom: 15,
    textAlign: "center",
  },
  content: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
});

export default BlogDetail;

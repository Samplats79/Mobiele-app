import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const BlogDetail = ({ route }) => {
  const { blog } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{blog.title}</Text>

      {blog.date && (
        <Text style={styles.date}>
          {new Date(blog.date).toLocaleDateString("nl-BE")}
        </Text>
      )}

      {blog.image ? (
        <Image source={{ uri: blog.image }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={{ color: "#aaa" }}>Geen afbeelding</Text>
        </View>
      )}

      <Text style={styles.summary}>
        {blog.summary}
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
    marginBottom: 10,
    color: "#222",
    textAlign: "center",
  },
  date: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
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
    fontStyle: "italic",
    textAlign: "center",
    color: "#555",
    marginBottom: 15,
  },
});

export default BlogDetail;

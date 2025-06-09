import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const BlogDetail = ({ route }) => {
  const { blog } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{blog.title}</Text>

      {blog.image && (
        <Image source={{ uri: blog.image }} style={styles.image} />
      )}

      <Text style={styles.summary}>{blog.summary}</Text>
      <Text style={styles.content}>{blog.content}</Text>
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
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 15,
  },
  summary: {
    fontSize: 16,
    color: "#555",
    fontStyle: "italic",
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
});

export default BlogDetail;

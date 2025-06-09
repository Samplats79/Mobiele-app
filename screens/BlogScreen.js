import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

const BlogScreen = ({ navigation }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://api.webflow.com/collections/67d30c9112b657255dd2315/items?live=true", {
      headers: {
        Authorization: "Bearer 3dbe01b3f32172c80e2d238a779248b5d28da76fde6272e7e1bbb76d9ebff485",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const items = data.items.map((item) => ({
          id: item._id,
          title: item.name,
          summary: item["post-summary"],
          content: item["post-body"],
          image: item["main-image"]?.url,
        }));
        setBlogs(items);
      })
      .catch((err) => console.error("Fout bij het ophalen van blogs:", err));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Onze Blogposts</Text>
      {blogs.map((blog) => (
        <TouchableOpacity
          key={blog.id}
          style={styles.card}
          onPress={() => navigation.navigate("BlogDetail", { blog })}
        >
          <Text style={styles.blogTitle}>{blog.title}</Text>
          <Text numberOfLines={2} style={styles.summary}>{blog.summary}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  summary: {
    fontSize: 14,
    color: "#555",
  },
});

export default BlogScreen;

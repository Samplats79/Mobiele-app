import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import BlogCard from "../components/BlogCard";

const BlogScreen = ({ navigation }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.webflow.com/v2/collections/67d30c9112ab657255dd2315/items", {
      headers: {
        Authorization: "Bearer 3dbe01b3f32172c80e2d238a779248b5d28da76fde6272e7e1bbb76d9ebff485",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("GEKREGEN DATA:", data); // << voeg dit toe om te debuggen
        if (data && data.items) {
          const items = data.items.map((item) => ({
            id: item._id || item.id,
            title: item.name,
            summary: item["post-summary"],
            content: item["post-body"],
            image: item["main-image"]?.url,
          }));
          setBlogs(items);
        } else {
          console.warn("Ongeldige response:", data);
        }
      })
      .catch((err) => console.error("Fout bij het ophalen van blogs:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Onze Blogposts</Text>
      {loading ? (
        <Text>Bezig met laden...</Text>
      ) : (
        blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} navigation={navigation} />
        ))
      )}
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
});

export default BlogScreen;

import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import BlogCard from "../components/BlogCard";

const BlogScreen = ({ navigation }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.webflow.com/v2/sites/67b5ee01d2d266ffba9ef91e/collections/67d30c911a2b657255dd2315/items", {
      headers: {
        Authorization: "Bearer eab13d64fcde1559fb725a37c3572a8d226dd37211e091a7f398cbbc0381e595",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.items) {
          const items = data.items.map((item) => ({
            id: item.id,
            title: item.fieldData.name || "Geen titel",
            date: item.lastPublished || item.createdOn || "", // Gebruik publicatiedatum
            summary: item.fieldData["post-summary"] || "Geen samenvatting beschikbaar.",
            content: item.fieldData["post-body"] || "Geen inhoud beschikbaar.",
            image: item.fieldData["main-image"]?.url || "https://via.placeholder.com/300x200.png?text=Geen+Afbeelding",
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
      <Text style={styles.title}>Blogposts</Text>
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

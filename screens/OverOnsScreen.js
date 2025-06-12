import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

const OverOns = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo of afbeelding bovenaan */}
      <Image
        source={require("../assets/logo zonder.png")}
        style={styles.logo}
      />

      {/* Titels */}
      <Text style={styles.title}>Welkom bij Sportify</Text>
      <Text style={styles.subtitle}>Jouw game, onze passie 🏀</Text>

      {/* Informatie tekstblokken */}
      <Text style={styles.paragraph}>
        Bij Sportify draait alles om basketbal. Of je nu een beginnende baller bent
        of een doorgewinterde pro – wij zorgen voor topkwaliteit materiaal dat jouw spel naar het volgende niveau tilt.
      </Text>

      <Text style={styles.paragraph}>
        Van basketbalballen en schoenen tot accessoires en trainingskledij:
        wij bieden enkel merken aan die we zelf zouden gebruiken op het court. Elk product is gekozen met oog voor kwaliteit, duurzaamheid en stijl.
      </Text>

      <Text style={styles.paragraph}>
        Sportify is er niet alleen om te verkopen – wij willen de basketbalcommunity versterken.
        We delen tips, inspireren jonge spelers, en motiveren iedereen om te blijven dribbelen, schieten en scoren.
      </Text>

      <Text style={styles.paragraph}>
        Stap mee in onze missie en ontdek het beste van basketbal.
        Van playground tot pro – wij staan aan jouw zijde. Let's ball! 🏀🔥
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#a62828",
    textAlign: "center",
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginBottom: 15,
    lineHeight: 24,
  },
});

export default OverOns;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen.js";
import ProductDetail from "./screens/ProductDetail.js";
import BlogScreen from "./screens/BlogScreen";
import BlogDetail from "./screens/BlogDetail";
import OverOnsScreen from "./screens/OverOnsScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Blog" component={BlogScreen} />
        <Stack.Screen name="BlogDetail" component={BlogDetail} />
        <Stack.Screen name="OverOns" component={OverOnsScreen} />
      </Stack.Navigator>   
    </NavigationContainer>
  );
}

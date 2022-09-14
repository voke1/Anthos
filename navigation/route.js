import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { MyCart, Gallery, Home, AddProduct } from "../screens";
import { COLORS } from "../constants";

const Stack = createStackNavigator();

const Routes = () => {
  return (

    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary}/>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,

          // Fade out Transition
          cardStyleInterpolator: ({ current: { progress } }) => {
            const opacity = progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: "clamp",
            });

            return {
              cardStyle: {
                opacity,
              },
            };
          },
        }}
        initialRouteName="HomeScreen"
      >
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="GalleryScreen" component={Gallery} />
        <Stack.Screen name="CartScreen" component={MyCart} />
        <Stack.Screen name="AddProductScreen" component={AddProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Routes };

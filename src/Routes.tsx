import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./screens/Home";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useTheme } from "./contexts/Theme";

const Stack = createNativeStackNavigator();

export const Routes: React.FC = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
    >
      <StatusBar
        animated
        backgroundColor={theme.colors.background}
        hideTransitionAnimation="slide"
        networkActivityIndicatorVisible={false}
        style={theme.name === "dark" ? "light" : "dark"}
      />
      <Stack.Navigator
        defaultScreenOptions={{
          animation: "simple_push",
          animationTypeForReplace: "pop",
        }}
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

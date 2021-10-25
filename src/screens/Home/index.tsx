import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { useTheme } from "../../contexts/Theme";

import Header from "../../components/Header";

import { styles } from "./styles";

export const Home: React.FC = () => {
  const { theme, updateTheme } = useTheme();

  function handleUpdateTheme() {
    if (theme.name === "dark") {
      updateTheme("light");
    } else {
      updateTheme("dark");
    }
  }

  return (
    <ScrollView
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Header />
      <View style={styles.center}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: theme.colors.primary }}
        >
          <MaterialCommunityIcons
            name="folder-multiple"
            color="white"
            size={25}
          />
          <Text style={styles.label}>Repositorios</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: theme.colors.primary }}
        >
          <MaterialCommunityIcons name="folder-plus" color="white" size={25} />
          <Text style={styles.label}>Novo repositorio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: theme.colors.primary }}
          onPress={handleUpdateTheme}
        >
          <MaterialIcons name="color-lens" color="white" size={25} />
          <Text style={styles.label}>Mudar tema ({theme.name})</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

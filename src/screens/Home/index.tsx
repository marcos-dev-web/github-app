import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useTheme } from "../../contexts/Theme";
import Header from "../../components/Header";

import { styles } from "./styles";

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

export const Home: React.FC<Props> = ({ navigation }) => {
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
      <Header
        profileAction={() => {
          navigation.navigate("Profile");
        }}
        title="Perfil"
      />
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

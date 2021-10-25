import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useTheme } from "../../contexts/Theme";

import { styles } from "./styles";

type Props = {
  color?: string;
  text?: string;
};

export const Loader: React.FC<Props> = ({ color, text }) => {
  const { theme } = useTheme();

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
    >
      <Text style={{ ...styles.text, color: theme.colors.text }}>
        {text || "Carregando, por favor aguarde"}
      </Text>
      <ActivityIndicator color={color || "white"} size={25} />
    </View>
  );
};

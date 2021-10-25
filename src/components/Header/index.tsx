import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../contexts/Auth";
import { useTheme } from "../../contexts/Theme";
import { styles } from "./styles";

const Header: React.FC = () => {
  const { user } = useAuth();
  const { theme } = useTheme();

  return (
    <View
      style={{
        ...styles.container,
        borderBottomColor: theme.colors.grayLight,
        backgroundColor: theme.colors.background,
      }}
    >
      <Text
        numberOfLines={1}
        style={{ ...styles.name, color: theme.colors.text }}
      >
        {user?.name}
      </Text>
      <TouchableOpacity
        style={{ ...styles.button, backgroundColor: theme.colors.grayLight }}
      >
        <Image source={{ uri: user?.avatar_url }} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

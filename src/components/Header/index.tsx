import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { Menu, MenuItem } from "react-native-material-menu";

import { useAuth } from "../../contexts/Auth";
import { useTheme } from "../../contexts/Theme";

import { styles } from "./styles";

type Props = {
  profileAction: () => void;
  title: string;
};

const Header: React.FC<Props> = ({ profileAction, title }) => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const [visible, setVisible] = useState(false);

  return (
    <>
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
        <Menu
          visible={visible}
          onRequestClose={() => {
            setVisible(false);
          }}
          anchor={
            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor: theme.colors.grayLight,
              }}
              onPress={() => {
                setVisible(true);
              }}
            >
              <Image source={{ uri: user?.avatar_url }} style={styles.image} />
            </TouchableOpacity>
          }
        >
          <MenuItem
            onPress={() => {
              setVisible(false);
              profileAction();
            }}
          >
            {title}
          </MenuItem>
        </Menu>
      </View>
    </>
  );
};

export default Header;

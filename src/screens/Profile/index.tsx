import React from "react";
import { Image, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useTheme } from "../../contexts/Theme";
import { useAuth } from "../../contexts/Auth";
import Header from "../../components/Header";

import { createStyles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
};

export const Profile: React.FC<Props> = ({ navigation }) => {
  const { theme } = useTheme();
  const { user } = useAuth();

  const styles = createStyles(theme.colors);

  return (
    <View style={styles.container}>
      <Header
        profileAction={() => {
          navigation.navigate("Home");
        }}
        title="Home"
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.boxImg}>
          <Image source={{ uri: user?.avatar_url }} style={styles.img} />
        </View>
        <Text style={styles.label}>{user?.name}</Text>
      </ScrollView>
    </View>
  );
};

import { StyleSheet, Dimensions, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width,
    height,
    marginTop: StatusBar.currentHeight,
    elevation: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: 40,
  },
});

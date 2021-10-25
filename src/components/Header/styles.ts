import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
  },
  button: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45 / 2,
    padding: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 45 / 2,
  },
  name: {
    fontSize: 16,
    maxWidth: '50%',
  }
});

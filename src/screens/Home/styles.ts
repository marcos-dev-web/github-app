import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    alignSelf: "center",
  },
  button: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    elevation: 2,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
});

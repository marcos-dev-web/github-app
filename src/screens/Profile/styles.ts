import { StyleSheet, Dimensions } from "react-native";

import { IColors } from "../../types";

const { width, height } = Dimensions.get("window");

export function createStyles(colors: IColors) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollView: {
      height,
      width,
    },
    boxImg: {
      width: width - 40,
      height: width - 40,
      borderWidth: 1,
      borderColor: colors.grayLight,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      borderRadius: 5,
      padding: 1,
      backgroundColor: colors.grayLight,
      marginTop: 50,
      overflow: "hidden",
    },
    img: {
      width: "100%",
      height: "100%",
      borderRadius: 5,
    },
    label: {
      fontSize: 15,
      color: colors.primary,
      marginTop: 8,
      paddingBottom: 8,
      width: width - 40,
      alignSelf: "center",
      borderBottomColor: colors.grayLight,
      borderBottomWidth: 1,
    },
  });
}

import { ThemeObject } from "../../types";

export const themes: ThemeObject = {
  dark: {
    colors: {
      background: "#404452",
      grayLight: "#7f828f",
      primary: "#5b56f5",
      secondary: "#6d38ff",
      text: "white",
    },
    name: "dark",
  },
  light: {
    default: true,
    colors: {
      background: "#ffffff",
      grayLight: "lightgray",
      primary: "#5b56f5",
      secondary: "#9437e6",
      text: "#1e1d24",
    },
    name: "light",
  },
};

import React, { useContext, createContext, useState } from "react";

import { IThemeContext, ITheme, ThemeOptions } from "../../types";
import { themes } from "./themes";

const ThemeContext = createContext({} as IThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(themes.light);

  function updateTheme(themeName: ThemeOptions) {
    setTheme(themes[themeName]);
  }

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}

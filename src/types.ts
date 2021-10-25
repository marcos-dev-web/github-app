export type ThemeOptions = "light" | "dark";

export interface IColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  grayLight: string;
}

export interface ITheme {
  colors: IColors;
  name: ThemeOptions;
  default?: boolean;
}

export interface IThemeContext {
  theme: ITheme;
  updateTheme: (themeName: ThemeOptions) => void;
}

export type ThemeObject = {
  [name in ThemeOptions]: ITheme;
};

export interface User {
  id: number;
  name: string;
  email: string;
  avatar_url: string;
  bio?: string;
  followers: number;
  following: number;
  location?: string;
}

export interface IAuthContext {
  signned: boolean;
  user: User | undefined;
  loading: boolean;
}

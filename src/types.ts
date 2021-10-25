export type ThemeOptions = "light" | "dark";

export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    grayLight: string;
  };
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
  name: string;
  email: string;
  token: string;
  profile_image: string;
}

export interface IAuthContext {
  signned: boolean;
  user: User | undefined;
  loading: boolean;
}

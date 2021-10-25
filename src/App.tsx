import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { Routes } from "./Routes";
import { useAuth } from "./contexts/Auth";
import { useTheme } from "./contexts/Theme";
import { Loader } from "./components/Loader";

export const App: React.FC = () => {
  const { theme } = useTheme();
  const { loading } = useAuth();

  return (
    <>
      {loading && <Loader color={theme.colors.primary} />}
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
};

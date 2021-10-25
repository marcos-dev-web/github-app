import React from "react";
import { App } from "./src/App";

import { AuthProvider } from "./src/contexts/Auth";
import { ThemeProvider } from "./src/contexts/Theme";

export default () => (
  <ThemeProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";

import { ThemeProvider } from "styled-components";
import theme from "./styles/global";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ChakraProvider>
  </StrictMode>
);

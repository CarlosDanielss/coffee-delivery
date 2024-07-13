import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { LocaleContextProvider } from "./contexts/localeContext";
import { CartContextProvider } from "./contexts/cartContext";
import { Router } from "./Router";
import { useEffect } from "react";
import { Toaster } from "sonner";

export function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <LocaleContextProvider>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </LocaleContextProvider>
      </BrowserRouter>

      <Toaster
        richColors
        position="top-right"
        toastOptions={{ style: { padding: "12px" } }}
      />

      <GlobalStyle />
    </ThemeProvider>
  );
}

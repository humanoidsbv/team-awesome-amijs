/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { ThemeProvider } from "styled-components";

import type { AppProps } from "next/app";
import { StoreProvider } from "../src/stores/StoreProvider";
import { theme } from "../src/styling/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  );
};
export default App;

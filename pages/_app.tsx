/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { ThemeProvider } from "styled-components";

import type { AppProps } from "next/app";
import { theme } from "../src/styling/theme";
import GlobalStyle from "../src/styling/global";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default App;

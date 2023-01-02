import "../../styles/globals.css";
import type { AppProps } from "next/app";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GillSansC';
    src: url('/fonts/GillSansC.otf') format('opentype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'GillSansC';
    src: url('/fonts/GillSansBoldC.otf') format('opentype');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'GillSansC';
    src: url('/fonts/GillSansLightC.otf') format('opentype');
    font-style: normal;
    font-weight: 100;
    font-display: swap;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

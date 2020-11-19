import { ThemeProvider } from "next-themes";
import "styles/global.css";

import "typeface-open-sans";
import "typeface-merriweather";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
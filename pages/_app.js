// import { ThemeProvider } from 'next-themes'
import "styles/global.css";

import "typeface-open-sans";
import "typeface-merriweather";


export default function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
 
  )
} 

// import { lightTheme, darkTheme } from '../Theme';

// export default ({ children }) => {
//   const { value } = useDarkMode(false, { storageKey: null, onChange: null })
//   const theme = value ? darkTheme : lightTheme

//   const [mounted, setMounted] = React.useState(false)

//   React.useEffect(() => {
//     setMounted(true)
//   }, [])
    
//   const body = 
//     <ThemeProvider theme={theme}>
//       {children}
//     </ThemeProvider>

//   // prevents ssr flash for mismatched dark mode
//   if (!mounted) {
//       return <div style={{ visibility: 'hidden' }}>{body}</div>
//   }

//   return body
// }
// import * as React from 'react';
// import App from 'next/app';
// import Providers from '../components/Providers';

// class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <Providers>
//         <Component {...pageProps} />
//       </Providers>
//     );
//   }
// }

// export default MyApp;



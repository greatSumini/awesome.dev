import type { AppProps } from "next/app";

import "../styles/globals.css";

if (typeof window !== "undefined") {
  console.log(`
   █████  ██     ██ ███████ ███████  ██████  ███    ███ ███████    ██████  ███████ ██    ██ 
  ██   ██ ██     ██ ██      ██      ██    ██ ████  ████ ██         ██   ██ ██      ██    ██ 
  ███████ ██  █  ██ █████   ███████ ██    ██ ██ ████ ██ █████      ██   ██ █████   ██    ██ 
  ██   ██ ██ ███ ██ ██           ██ ██    ██ ██  ██  ██ ██         ██   ██ ██       ██  ██  
  ██   ██  ███ ███  ███████ ███████  ██████  ██      ██ ███████ ██ ██████  ███████   ████                                                                                               
  
  contact: +82 010-4413-1261, lead@awesome.dev
  `);
}

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;

import type { AppProps } from "next/app";

import "../styles/globals.css";

if (typeof window !== "undefined") {
  console.log(`
   █████  ██     ██ ███████ ███████  ██████  ███    ███ ███████    ██████  ███████ ██    ██ 
  ██   ██ ██     ██ ██      ██      ██    ██ ████  ████ ██         ██   ██ ██      ██    ██ 
  ███████ ██  █  ██ █████   ███████ ██    ██ ██ ████ ██ █████      ██   ██ █████   ██    ██ 
  ██   ██ ██ ███ ██ ██           ██ ██    ██ ██  ██  ██ ██         ██   ██ ██       ██  ██  
  ██   ██  ███ ███  ███████ ███████  ██████  ██      ██ ███████ ██ ██████  ███████   ████                                                                                               
  `);
}

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;

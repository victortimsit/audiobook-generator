import type { AppProps } from "next/app";
import { DynamicHead } from "../components/DynamicHead";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DynamicHead />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import SessionWrapper from "../components/SessionWrapper";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      {/* <SessionWrapper> */}
      <Component {...pageProps} />

      {/* </SessionWrapper> */}
    </SessionProvider>
  );
}

export default MyApp;

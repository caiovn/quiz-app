import type { AppProps } from "next/app";
import "./global.css";
import styles from "./_app.module.css";
import { Navbar } from "@/components";
import { Providers } from "@/providers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <main>
        <Navbar></Navbar>
        <div className={styles.page}>
          <Component {...pageProps} />
        </div>
      </main>
    </Providers>
  );
}

import type { AppProps } from "next/app";
import "./global.css";
import styles from "./_app.module.css";
import { Navbar } from "@/components";
import { Providers } from "@/providers";
import { useContext, useEffect } from "react";
import { LoadingContext } from "@/providers/loading.provider";

export default function App({ Component, pageProps }: AppProps) {
  const setLoading = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

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

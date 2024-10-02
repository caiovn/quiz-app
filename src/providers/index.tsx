/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import LoadingProvider from "./loading.provider";
import { ThemeProvider } from "./theme.provider";

export function Providers({ children }: any) {
  return (
    <LoadingProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </LoadingProvider>
  );
}

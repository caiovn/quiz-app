/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ThemeProvider } from "./theme.provider";

export function Providers({ children }: any) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

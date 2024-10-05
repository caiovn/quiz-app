import React, { useCallback } from "react";
import { LoadingSpinner } from "@/components";
import { createContext, ReactElement, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LoadingContext = createContext((_: boolean) => {});

export default function LoadingProvider({
  children,
}: {
  children: ReactElement;
}) {
  const [loading, setLoading] = useState(false);

  const handleChangeLoading = useCallback((val: boolean) => {
    setLoading(val);
    const bodyElm = document.querySelector("body");
    if (!val) {
      bodyElm?.removeAttribute("class");
      return;
    }

    bodyElm?.setAttribute("class", "body-global-loading");
  }, []);

  return (
    <LoadingContext.Provider value={handleChangeLoading}>
      {loading && (
        <div className="global-loading">
          <LoadingSpinner />
        </div>
      )}
      <>{children}</>
    </LoadingContext.Provider>
  );
}

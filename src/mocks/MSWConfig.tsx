"use client";

import { ComponentProps, createContext, useEffect, useState } from "react";

const MSWContext = createContext("");

type Props = Omit<ComponentProps<typeof MSWContext.Provider>, "value">;

export default function MSWConfig({ children }: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("@/mocks/index")
        .then((res) => res.initMSW())
        .then(() => setLoaded(true));
    } else {
      setLoaded(true);
    }
  }, []);

  return (
    <MSWContext.Provider value={""}>
      {loaded ? children : <></>}
    </MSWContext.Provider>
  );
}

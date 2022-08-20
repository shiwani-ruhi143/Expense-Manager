import React, { useState } from "react";
import { LoaderContext } from "./loaderContext";
const LoaderState = ({ children }) => {
  const [Loading, setLoading] = useState(false);
  return (
    <LoaderContext.Provider value={{ Loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderState;

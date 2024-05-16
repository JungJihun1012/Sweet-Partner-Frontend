import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

const Mobile: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return <>{isMobile && children}</>;
};

const PC: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width: 769px)",
  });
  return <>{isPc && children}</>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { Mobile, PC };

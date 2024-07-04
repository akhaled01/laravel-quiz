"use client";

import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            cacheTime: 0,
            staleTime: 60 * 1000,
          },
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;

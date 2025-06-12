"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const TestQuery = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <span>test</span>
    </QueryClientProvider>
  );
};

export { TestQuery };

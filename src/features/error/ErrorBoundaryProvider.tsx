import { PropsWithChildren } from "react";
import { SWRConfig } from "swr";
import ErrorBoundary from "./ErrorBoundary";

export default function ErrorBoundaryProvider({ children }: PropsWithChildren) {
  return (
    <SWRConfig
      value={{
        suspense: true,
        fetcher,
      }}
    >
      <ErrorBoundary>{children}</ErrorBoundary>
    </SWRConfig>
  );
}

async function fetcher(resource: RequestInfo | URL, init?: RequestInit) {
  const res = await fetch(resource, init);
  return await res.json();
}

import type React from "react";
import { Provider } from "@/components/ui/provider";
import { BrowserRouter } from "react-router";

export default function AppProviders({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <Provider>
        <BrowserRouter basename="/the-experiment-directory">
          {children}
        </BrowserRouter>
      </Provider>
    </>
  );
}

import type React from "react";
import { Provider } from "@/components/ui/provider"
import { BrowserRouter } from "react-router"

export default function Providers({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Provider>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    </>
  )
}
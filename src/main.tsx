import "@/styles/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppProviders from "@/providers";
import AppRoutes from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders>
      {/* <Theme appearance="dark" colorPalette="purple"> */}
      <AppRoutes />
      {/* </Theme> */}
    </AppProviders>
  </StrictMode>,
);

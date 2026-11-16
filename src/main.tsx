import "@/styles/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppProviders from "@/providers";
import AppRoutes from "./routes";
import { Theme } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders>
      {/* <Theme appearance="dark" colorPalette="purple"> */}
      <AppRoutes />
      {/* </Theme> */}
    </AppProviders>
  </StrictMode>,
);

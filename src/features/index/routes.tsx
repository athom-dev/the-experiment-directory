import { lazy } from "react";
import IndexLayout from "./layout";

const HomePage = lazy(() => import("./pages"));
const UpdatesAndAdditionsPage = lazy(
  () => import("./pages/updates-and-additions"),
);

export const indexRoutes = [
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/updates-and-additions",
        element: <UpdatesAndAdditionsPage />,
      },
    ],
  },
];

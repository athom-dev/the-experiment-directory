import IndexLayout from "./layout";
import HomePage from "./pages";
import UpdatesAndAdditionsPage from "./pages/updates-and-additions";

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

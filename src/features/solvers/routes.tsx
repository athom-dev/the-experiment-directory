import { lazy } from "react";

const SolversLayout = lazy(() => import("./pages/layout"));
const TrialsLockdownKeys = lazy(() => import("./pages/trials-lockdown-keys"));
const UnknownSignal = lazy(() => import("./pages/unknown-signal"));

import { Navigate } from "react-router";

export const solversRoutes = [
  {
    path: "/solvers/",
    element: <SolversLayout />,
    children: [
      {
        path: "/solvers/",
        element: <Navigate to="/" />,
      },
      {
        path: "/solvers/trials-lockdown-keys",
        element: <TrialsLockdownKeys />,
      },
      {
        path: "/solvers/unknown-signal",
        element: <UnknownSignal />,
      },
    ],
  },
];

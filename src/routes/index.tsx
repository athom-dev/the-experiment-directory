import { indexRoutes } from "@/features/index/routes";
import { solversRoutes } from "@/features/solvers/routes";
import AppLayout from "@/layout";
import { useRoutes } from "react-router";

const appRoutes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [...indexRoutes, ...solversRoutes],
  },
];
export default function AppRoutes() {
  const routes = useRoutes(appRoutes);
  return routes;
}

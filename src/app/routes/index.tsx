import { useRoutes } from "react-router"
import publicRoutes from "./publicRoutes"

export default function Routes () {
  const routes = useRoutes([... publicRoutes])
  return routes
}
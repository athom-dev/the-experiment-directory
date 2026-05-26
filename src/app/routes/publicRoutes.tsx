import Layout from "@/app/layout"
import Article from "@/features/article"
const publicRoutes = [
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/article/:id",
        element: <Article />
      }
    ]
  }
]
export default publicRoutes
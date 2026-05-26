import Layout from "@/app/layout"
import Article from "@/features/article"
const publicRoutes = [
  {
    path: "/the-experiment-directory/",
    element: <Layout/>,
    children: [
      {
        path: "/the-experiment-directory/article/:id",
        element: <Article />
      }
    ]
  }
]
export default publicRoutes
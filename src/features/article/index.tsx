import {ArticleContent, ArticleHeader } from "@/components/article-content"
import { useParams } from "react-router"

export default function Article() {
  const {id} = useParams()
  console.log(id)

  return (
    <>
      <ArticleHeader id={id} />
      <ArticleContent id={id} />
    </>
  )
}
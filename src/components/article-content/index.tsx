import { useEffect, useState } from "react"
import Markdown from "react-markdown"
import { Prose } from "@/components/ui/prose"

export function ArticleHeader({id}:{id:any}) {
  const [json, setJson] = useState<{ title?: string } | null>(null)

  useEffect(() => {
    if (!id) return
    fetch(`/articles/${id}/manifest.json`)
      .then((response) => response.json())
      .then( (data) => {
        setJson(data)
      }
      )
      .catch(console.error);
  }, [id])

  return (
    <Prose>
      <Markdown>{json?.title ?? id}</Markdown>
    </Prose>
  )
}
export function ArticleContent({id}:{id:any}) {
  const [content, setContent] = useState("")

  useEffect(() => {
    if (!id) return
    fetch(`/articles/${id}/index.md`)
      .then(res => {
        const type = res.headers.get("content-type")
        if (!type || !type.includes("text/markdown")) {
          throw new Error("Not found")
        }
        return res.text()
      })
      .then(setContent)
      .catch(() => setContent("# 404\nConteúdo não encontrado"))
  }, [id])

  return (
    <Prose>
      <Markdown>{content}</Markdown>
    </Prose>
  )
}
import '@/styles/App.css'
import { Prose } from "@/components/ui/prose"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useState, useEffect } from 'react';

function Layout({children}: {children?: React.ReactNode}) {
  const [content, setContent] = useState("")

  useEffect(() => {
    fetch("/articles/test.md")
      .then(res => res.text())
      .then(text => setContent(text))
  }, [])


  return (
    <>
      <Prose>
        <Markdown remarkPlugins={[remarkGfm]}>
          {content}
        </Markdown>
      </Prose>
      {children}
    </>
  )
}

export default Layout

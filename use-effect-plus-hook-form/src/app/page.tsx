"use client"
import { useState } from "react"
import { Form } from '@/components'
import { ThemeContext } from "@/contexts"

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        actual mode: {theme}<br />
      </div>
      <Form />
    </ThemeContext.Provider>
  )
}

import { createContext, Dispatch, SetStateAction } from "react"

interface IThemeContext {
  theme: "light" | "dark"
  setTheme: Dispatch<SetStateAction<"light" | "dark">>
}

export const ThemeContext = createContext({} as IThemeContext)

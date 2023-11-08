import { ThemeContext } from "@/contexts";
import { useContext } from "react"

export function Form() {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <form action="">
            <button onClick={(e) => {
                e.preventDefault()
                setTheme(theme == "light" ? "dark" : "light")
            }}>
                change mode
            </button>
            <input type="text" placeholder={theme} />
            <button>submit</button>
        </form>
    )
}
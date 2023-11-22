import { InputHTMLAttributes } from "react"
import { useFormContext } from "react-hook-form"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    title?: string
}

export const Input = (props: InputProps) => {
    const { register } = useFormContext()
    return (
        <input
            type="text"
            className="text-zinc-950"
            placeholder={props.name}
            id={props.name}
            {...register(props.name)}
            {...props}
        />
    )
} 
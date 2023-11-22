"use client"
import { useState, Fragment } from "react"
import { Input } from "@/components"
import { useForm, FormProvider, FieldValues } from "react-hook-form"

export default function Page() {
    const [step, setStep] = useState(() => 1)
    const methods = useForm()

    const onSubmit = (formObject: FieldValues) => {
        setStep((prevStep) => prevStep + 1)
        console.log(formObject)
    }

    // const StepInputs = [
    //     (<Fragment key="step1">
    //         <Input name='nome' />
    //         <Input name='idade' />
    //     </Fragment>),

    //     (<Fragment key="step2">
    //         <Input name='cidade' />
    //         <Input name='bairro' />
    //     </Fragment>),
    //     (<Fragment key="step3">
    //         <Input name='rua' />
    //         <Input name='número' />
    //     </Fragment>)

    // ][step - 1]

    return (
        <div className="container mx-auto">
            <div className="w-full h-screen bg-zinc-700">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <StepInputs step={step} />
                        <button type="submit">next step</button>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}

export const StepInputs = ({ step }: { step: number }) => {

    if (step > 3) return <></>

    const Step = {
        1: InputStep1,
        2: InputStep2,
        3: InputStep3
    }[step]

    return <Step />
}

const InputStep1 = () => {
    return (<>
        <Input name='nome' />
        <Input name='idade' />
    </>)
}

const InputStep2 = () => {
    return (<>
        <Input name='cidade' />
        <Input name='bairro' />
    </>)
}

const InputStep3 = () => {
    return (<>
        <Input name='rua' />
        <Input name='numero' />
    </>)
}

/**
 * eu deveria fazer um state para gerenciar os passos aqui e ir renderizando componentes "página conforme o passo?"
 * 
 * 1 - criar contexto do formulário
 * 2 - criar estado com os passos
 * 3 - criar um strategy relacionado ao passo
 * 4 - renderizar o passo atual e ir acumulando valor dos inputs no contexto
 * 
 * 5 - criar button e funcionalidade prevStep
 * 6 - criar composition para dados do form
 * 7 - adicionar zod na poc para testar tipagens
 */
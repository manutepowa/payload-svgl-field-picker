import { FieldProvider } from "./FieldContext"
import { BoxSelector } from "./BoxSelector"
import { InputField } from "./InputField"

interface InputPickerProps {
  path: string
  field: any
}
export const SvglPicker = async (props: InputPickerProps) => {
  const svglResponse = await fetch('https://api.svgl.app')
  const svgs = await svglResponse.json()


  return (
    <FieldProvider svgl={svgs} path={props.path} field={props.field}>
      <InputField />
      <BoxSelector />
    </FieldProvider>
  )
}


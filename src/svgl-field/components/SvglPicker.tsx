import { FieldProvider } from "./FieldContext"
import { BoxSelector } from "./BoxSelector"
import { TextField } from "@payloadcms/ui"
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
      <TextField field={props.field} path={props.path} />
      <InputField />
      <BoxSelector />
      <div>Hello</div>
    </FieldProvider>
  )
}


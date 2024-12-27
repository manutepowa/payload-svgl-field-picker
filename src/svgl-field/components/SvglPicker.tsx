import { TextFieldServerComponent } from "payload"
import { InputPicker } from "./InputPicker"

export const SvglPicker: TextFieldServerComponent = async (props) => {
  const path = (props?.path || props?.field?.name || '') as string

  const svglResponse = await fetch('https://api.svgl.app')
  const svgs = await svglResponse.json()


  return (
    <div>
      <InputPicker field={props?.clientField} path={path} svgs={svgs} />
    </div>
  )
}


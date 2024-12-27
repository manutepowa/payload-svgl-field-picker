import { TextFieldServerComponent } from "payload"

import { Suspense } from "react"
import { SvglPicker } from "./SvglPicker"

type ThemeOptions = {
  light: string;
  dark: string;
};

export interface iSVG {
  id: number;
  title: string;
  category: string | string[];
  route: string | ThemeOptions;
  wordmark?: string | ThemeOptions;
  url: string;
}




export const SvglField: TextFieldServerComponent = async (props) => {
  const path = (props?.path || props?.field?.name || '') as string
  console.log(props.data[path])

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SvglPicker field={props?.clientField} path={path} />
      </Suspense>
    </div>
  )
}


"use client"
import React, { createContext, useState } from "react"
import { iSVG } from "."
import { useField } from '@payloadcms/ui'


interface FieldContextProps {
  svgl: iSVG[]
  path: string
  field: any
  children: React.ReactNode
}
type ValueProps = Omit<FieldContextProps, "children"> & {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  value: any
  setValue: React.Dispatch<React.SetStateAction<any>>
}
const FieldContext = createContext({} as ValueProps)

export const FieldProvider = (props: FieldContextProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const {value, setValue} = useField({ path: props.path })
  const contextValue = {
    svgl: props.svgl,
    path: props.path,
    field: props.field,
    isOpen,
    setIsOpen,
    setValue,
    value
  };

  return (
    <FieldContext value={contextValue}>
      {props.children}
    </FieldContext>
  )
}

export const useFieldContext = () => {
  return React.useContext(FieldContext)
}

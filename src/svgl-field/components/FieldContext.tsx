"use client"
import React, { createContext } from "react"
import { iSVG } from "."


interface FieldContextProps {
  svgl: iSVG[]
  path: string
  field: any
  children: React.ReactNode
}
const FieldContext = createContext({} as Omit<FieldContextProps, "children">)

export const FieldProvider = (props: FieldContextProps) => {
  const value = {
    svgl: props.svgl,
    path: props.path,
    field: props.field,
  };

  return (
    <FieldContext value={value}>
      {props.children}
    </FieldContext>
  )
}

export const useFieldContext = () => {
  return React.useContext(FieldContext)
}

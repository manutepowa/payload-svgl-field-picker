"use client"

import { useFieldContext } from "./FieldContext"

export const InputField = () => {
  const {setIsOpen, isOpen, value} = useFieldContext()
  return (
    <div className="field-type text">
      <label className="field-label" htmlFor="field-svgl-picker">SVGL Picker</label>
      <div className="field-type__wrap flex">
        <button 
          className="flex items-center justify-center w-16 px-4 hover:bg-slate-700 bg-transparent cursor-pointer border-0 hover:border-0"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          {value && <img src={value} alt={value} />}
        </button>
        <input data-rtl="false" id="field-svgl-picker" type="text" disabled name="svgl-picker" defaultValue={value} />
      </div>
    </div>
  )
}

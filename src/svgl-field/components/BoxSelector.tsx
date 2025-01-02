"use client"
import { useFieldContext } from "./FieldContext"

export const BoxSelector = () => {
  const {svgl, isOpen, setValue} = useFieldContext()
  return (
    <div className="flex p-6 mt-4 rounded-lg border border-slate-700">
      <div className="grid grid-cols-8 gap-2">
        {isOpen && svgl.map((svg) => {
          const svgRoute = typeof svg.route === 'string' ? svg.route : svg.route.light
          return (
              <div 
                key={svg.id} 
                className="bg-slate-400 hover:bg-slate-700 rounded-lg flex p-2"
                onClick={() => setValue(svgRoute)}
              >
                <img src={svgRoute} alt={svg.title} />
              </div>
            )
        })}
      </div>
    </div>
  )
}

"use client"
import { useFieldContext } from "./FieldContext"




export const BoxSelector = () => {
  const {svgl} = useFieldContext()
  return (
    <div>
      <div className="grid grid-cols-6 gap-2">
        {svgl.map((svg) => {
          const svgRoute = typeof svg.route === 'string' ? svg.route : svg.route.light
          return (
              <div key={svg.id} className="bg-slate-300 hover:bg-slate-500 rounded-lg flex p-2">
                <img src={svgRoute} alt={svg.title} />
              </div>
            )
        })}
      </div>
    </div>
  )
}

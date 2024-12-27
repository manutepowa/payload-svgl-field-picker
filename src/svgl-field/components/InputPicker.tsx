"use client"

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

interface InputPickerProps {
  path: string
  field: any
  svgs: iSVG[]
}

export const InputPicker = (props: InputPickerProps) => {
  const { path } = props
  const svgs = props?.svgs || []
  return (
    <div>
      <div className="grid grid-cols-6 gap-2">
        {svgs.map((svg) => {
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

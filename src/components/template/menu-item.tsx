import React from 'react'

interface MenuItemProps {
   icone: any
   texto: string
   url: string
}

export default function MenuItem(props: MenuItemProps) {
   return (
      <div className="flex items-center gap-2 my-2.5 py-2 px-3 text-zinc-300 rounded-md hover:bg-black">
         <span>
            {React.cloneElement(props.icone, {
               stroke: 1,
            })}
         </span>
         <span>{props.texto}</span>
      </div>
   )
}

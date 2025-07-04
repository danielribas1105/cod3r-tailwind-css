import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
   icone: any
   texto: string
   url: string
}

export default function MenuItem(props: MenuItemProps) {
   return (
      <Link href={props.url}>
         <div className="flex items-center gap-1 py-1.5 px-3 text-zinc-300 rounded-md hover:bg-black">
            <span>
               {React.cloneElement(props.icone, {
                  stroke: 1,
               })}
            </span>
            <span>{props.texto}</span>
         </div>
      </Link>
   )
}

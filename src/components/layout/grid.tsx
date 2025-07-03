import React from 'react'

interface GridProps {
   children: React.ReactNode
   cols?: number
}

export default function Grid(props: GridProps) {
   return (
      <div className={`grid grid-cols-${props.cols ?? 1}`}>
         {props.children}
      </div>
   )
}

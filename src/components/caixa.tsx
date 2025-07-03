interface CaixaProps {
   children: React.ReactNode
   className?: string
}

export default function Caixa(props: CaixaProps) {
   return (
      <div
         className={`bg-red-500 rounded-md px-4 py-2 ${props.className ?? ''}`}
      >
         {props.children}
      </div>
   )
}

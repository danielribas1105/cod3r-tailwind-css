interface TituloProps {
   principal: string
   secundario: string
   gradiente?: boolean
}

export default function Titulo(props: TituloProps) {
   return (
      <div className="flex flex-col items-start">
         <h1 className={`text-4xl font-black ${props.gradiente ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-600' : ''}`}>{props.principal}</h1>
         <h2 className="text-md font-light text-zinc-500">{props.secundario}</h2>
      </div>
   )
}
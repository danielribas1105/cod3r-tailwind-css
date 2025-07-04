import Menu from './menu'

interface PaginaProps {
   children: React.ReactNode
}

export default function Pagina(props: PaginaProps) {
   return (
      <div className="flex h-screen">
         <Menu className="bg-zinc-900 w-72 py-4 px-7" />
         <div className="p-7">{props.children}</div>
      </div>
   )
}

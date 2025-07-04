import Logo from './logo'
import Menu from './menu'
import UsuarioInfo from './usuario-info'
import { IconMoon, IconSun } from '@tabler/icons-react'

interface PaginaProps {
   children: React.ReactNode
   className?: string
   alteraTema: () => void
   tema: 'dark' | ''
}

export default function Pagina(props: PaginaProps) {
   const usuario = {
      nome: 'Joãozinho Silva',
      email: 'joaosilva@provedor.com',
      imagemUrl: '/images.jpeg',
   }

   return (
      <div className={`flex h-screen ${props.tema}`}>
         <aside className="flex flex-col bg-zinc-200 dark:bg-zinc-900 w-96 py-2 px-5">
            <Logo />
            <Menu className="py-7 overflow-auto pb-28" />
            <div className="fixed bottom-0 w-72">
               <hr className="mx-5 border-zinc-400 dark:border-zinc-700" />
               <UsuarioInfo {...usuario} />
            </div>
            <div className="absolute flex items-center right-4 top-4 border border-zinc-500 dark:border-zinc-700 p-1 rounded-md">
               <button className="cursor-pointer" onClick={props.alteraTema}>
                  {props.tema === 'dark' ? <IconSun className='text-zinc-500'/> : <IconMoon className='text-zinc-700'/>}
               </button>
            </div>
         </aside>
         <div className="p-7 bg-zinc-100 dark:bg-black w-full">{props.children}</div>
      </div>
   )
}

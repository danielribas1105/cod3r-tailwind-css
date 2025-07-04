'use client'
import { useState } from 'react'
import Logo from './logo'
import Menu from './menu'
import UsuarioInfo from './usuario-info'

interface PaginaProps {
   children: React.ReactNode
}

export default function Pagina(props: PaginaProps) {
   const [tema, setTema] = useState<'dark' | ''>('dark')
   const usuario = {
      nome: 'Joãozinho Silva',
      email: 'joaosilva@provedor.com',
      imagemUrl: '/images.jpeg',
   }

   function alteraTema() {
      console.log('alteraTema')
      tema === 'dark' ? setTema('') : setTema('dark')
   }

   return (
      <div className="flex h-screen dark">
         <aside className="flex flex-col bg-zinc-200 dark:bg-zinc-900 w-80 py-2 px-5">
            <Logo />
            <Menu className="p-7 overflow-auto pb-28" />
            <div className="fixed bottom-2 w-72">
               <hr className="mx-5 border-zinc-700" />
               <UsuarioInfo {...usuario} />
            </div>
            <div className="absolute right-2 top-2">
               <button className="" onClick={alteraTema}>
                  Alternar
               </button>
            </div>
         </aside>
         <div className="p-7">{props.children}</div>
      </div>
   )
}

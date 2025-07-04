'use client'
import Pagina from '@/components/template/pagina'
import Titulo from '@/components/titulo'
import { useState } from 'react'

export default function Home() {
   const [tema, setTema] = useState<'dark' | ''>('dark')
   
   function alteraTema() {
      const novoTema = tema === 'dark' ? '' : 'dark'
      setTema(novoTema)
   }

   return (
      <Pagina className={`${tema}`} alteraTema={() => alteraTema()} tema={tema}>
         <Titulo
            principal="Home"
            secundario="Curso de React TailwindCSS"
            gradiente
         />
      </Pagina>
   )
}

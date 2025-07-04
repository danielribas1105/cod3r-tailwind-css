import { IconDotsVertical } from '@tabler/icons-react'
import Image from 'next/image'

interface UsuarioInfoProps {
   nome: string
   email: string
   imagemUrl: string
}
export default function UsuarioInfo(props: UsuarioInfoProps) {
   return (
      <div className="flex gap-3 py-7 bg-zinc-200 dark:bg-zinc-900">
         <Image
            src={props.imagemUrl}
            alt="Avatar usuário"
            width={40}
            height={40}
            className="rounded-full"
         />
         <div className="flex flex-col">
            <span className="font-bold text-zinc-700 dark:text-zinc-400">{props.nome}</span>
            <span className="font-light text-zinc-500 dark:text-zinc-600">{props.email}</span>
         </div>
         <div className="flex-1">
            <IconDotsVertical className="text-zinc-800 dark:text-zinc-400 cursor-pointer" />
         </div>
      </div>
   )
}

import { IconBrandTailwind } from '@tabler/icons-react'

export default function Logo() {
   return (
      <div className="flex items-center gap-2 pt-7">
         <IconBrandTailwind size={40} stroke={1} className='text-zinc-800 dark:text-zinc-400'/>
         <span className="text-zinc-700 dark:text-zinc-500">Tailwind com React</span>
      </div>
   )
}

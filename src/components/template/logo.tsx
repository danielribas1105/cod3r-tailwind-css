import { IconBrandTailwind } from '@tabler/icons-react'

export default function Logo() {
   return (
      <div className="flex items-center gap-2 pt-7 px-7">
         <IconBrandTailwind size={40} stroke={1} />
         <span className="text-zinc-400">Tailwind com React</span>
      </div>
   )
}

import Pagina from '@/components/template/pagina'
import Titulo from '@/components/titulo'

export default function Home() {
   return (
      <Pagina>
         <Titulo
            principal="Home"
            secundario="Curso de React TailwindCSS"
            gradiente
         />
      </Pagina>
   )
}

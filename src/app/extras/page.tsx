import Titulo from "@/components/titulo";

export default function Extras() {
   return (
      <div className="w-full h-full bg-gradient-to-b from-zinc-900 to-zinc-800">
         <div className="container mx-auto h-screen pt-4">
            <Titulo principal="Dashboard" secundario="Informação sobre a sua conta" gradiente/>
         </div>
      </div>
   )
}
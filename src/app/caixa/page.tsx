import Caixa from '@/components/caixa'

export default function CaixaPage() {
   return (
      <div className="flex-center items-center gap-5 h-screen">
         <div className="flex-center items-center gap-5">
            <Caixa>#1</Caixa>
            <Caixa>#2</Caixa>
            <Caixa>#3</Caixa>
         </div>
         <div className="flex flex-col gap-3">
            <Caixa className="w-36">#1</Caixa>
            <Caixa className="w-36 h-36 border-8 border-white box-content">
               #2
            </Caixa>
         </div>
      </div>
   )
}

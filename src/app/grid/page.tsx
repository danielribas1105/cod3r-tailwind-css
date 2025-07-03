import Caixa from '@/components/caixa'

export default function Grid() {
   return (
      <div className="flex flex-col gap-y-6">
         <div className="p-5 grid gap-2.5 grid-cols-3">
            <Caixa className="row-span-2">#1</Caixa>
            <Caixa>#2</Caixa>
            <Caixa>#3</Caixa>
            {/* <Caixa>#4</Caixa> */}
            <Caixa className="col-span-2">#5</Caixa>
            {/* <Caixa>#6</Caixa> */}
            <Caixa className="col-span-2">#7</Caixa>
            {/* <Caixa>#8</Caixa> */}
            <Caixa>#9</Caixa>
         </div>
         <div className="p-5 h-82 grid gap-2.5 grid-cols-3 bg-zinc-700">
            <Caixa className="row-start-1 row-end-4">#1</Caixa>
            <Caixa className="row-start-1 row-end-3 col-start-2 col-end-4">
               #2
            </Caixa>
            <Caixa>#3</Caixa>
            <Caixa>#4</Caixa>
            <Caixa>#5</Caixa>
            {/* <Caixa>#6</Caixa>
            <Caixa>#7</Caixa>
            <Caixa>#8</Caixa>
            <Caixa>#9</Caixa> */}
         </div>
      </div>
   )
}

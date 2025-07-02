export default function Classes() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex-center bg-zinc-900 text-4xl text-zinc-400 py-2">
        Tailwind usa classes o tempo todo!
      </div>
      <div className="flex flex-col gap-2 text-2xl md:text-3xl">
        <span className="inline-flex sm:hidden justify-center">Mobile</span>
        <span className="hidden sm:inline-flex justify-center">Not Mobile</span>
      </div>
      <div className="flex-center gap-5">
        <button className="btn btn-blue">Info</button>
        <button className="btn btn-green">Sucesso</button>
        <button className="btn btn-red">Error</button>
      </div>
    </div>
  )
}

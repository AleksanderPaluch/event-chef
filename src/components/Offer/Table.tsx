

interface Row {
  people: string;
  basic: string;
  premium: string;
}

export const Table = ({ rows }: { rows: Row[] }) => (
  <div className="flex flex-col gap-2 md:flex-row">
    <table className="w-full mx-auto border border-zinc-900 text-left font-light">
      <thead className="bg-zinc-900 tracking-wide">
        <tr className="text-md md:text-xl lg:text-2xl">
          {["Liczba osób", "Basic", "Premium"].map((header) => (
            <th
              key={header}
              className="px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-4 font-normal"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody className="divide-y divide-zinc-900 bg-zinc-100/10">
        {rows.map((row, index) => (
          <tr key={index} className="text-sm md:text-md lg:text-lg">
            <td className="px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-4">
              {row.people}
            </td>
            <td className="px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-4">
              <span className="text-md md:text-lg lg:text-xl font-bold  text-zinc-50">  {row.basic}</span>zł / osoba
            
            </td>
            <td className="px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-4">
             <span className="text-md md:text-lg lg:text-xl font-semibold text-zinc-50">{row.premium}</span>zł / osoba
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="bg-zinc-800 w-full md:max-w-72 lg:max-w-md min-h-40" >
      <div ></div>
      <div></div>
    </div>
  </div>
);



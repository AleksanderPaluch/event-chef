

interface Row {
  people: string;
  basic: string;
  premium: string;
}


export const Table = ({ rows }: { rows: Row[] }) => {

  console.log(rows)

  return (
    <div>Table</div>
  )
}






// export const Table = ({ rows }: { rows: Row[] }) => (

//     // console.log(rows)

//   return (
//     <></>
//   )


// );






// export const Table = ({ rows }: { rows: Row[] }) => (
//   <div className="flex flex-col gap-2 md:flex-row">
//     <table className="w-full mx-auto font-light text-left border border-zinc-900">
//       <thead className="tracking-wide bg-zinc-900">
//         <tr className="text-md md:text-xl lg:text-2xl">
//           {["Liczba osób", "Basic", "Premium"].map((header) => (
//             <th
//               key={header}
//               className="px-2 py-1 font-normal md:px-4 md:py-2 lg:px-6 lg:py-4"
//             >
//               {header}
//             </th>
//           ))}
//         </tr>
//       </thead>

//       <tbody className="divide-y divide-zinc-900 bg-zinc-100/10">
//         {rows.map((row, index) => (
//           <tr key={index} className="text-sm md:text-md lg:text-lg">
//             <td className="px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-4">
//               {row.people}
//             </td>
//             <td className="px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-4">
//               <span className="font-bold text-md md:text-lg lg:text-xl text-zinc-50">  {row.basic}</span>zł / osoba
            
//             </td>
//             <td className="px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-4">
//              <span className="font-semibold text-md md:text-lg lg:text-xl text-zinc-50">{row.premium}</span>zł / osoba
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>

//     <div className="w-full bg-zinc-800 md:max-w-72 lg:max-w-md min-h-40" >
//       <div ></div>
//       <div></div>
//     </div>
//   </div>
// );



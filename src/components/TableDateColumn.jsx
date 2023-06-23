import { TableHead } from './TableHead'

export function TableDateColumn({paginatedPrices}) {

	return (
      <div className='table__column bg-zinc-700 rounded-lg p-4 gap-2 h-min'>
         <TableHead>
            <p>Date & Time</p>
         </TableHead>
         {paginatedPrices.map(({ date }) => (
            <p className='shadow-md pl-2 py-1 rounded-md' key={date + Math.random()}>
               {new Date(date).toLocaleString()}
            </p>
         ))}
      </div>
   )
}
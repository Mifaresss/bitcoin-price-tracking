import { TableHead } from './TableHead'

export function TablePriceColumn({paginatedPrices}) {

	return (
      <div className='table__column bg-zinc-700 rounded-lg p-4 gap-2 h-min'>
         <TableHead>
            <p>Price</p>
         </TableHead>
         {paginatedPrices.map(({ price }) => (
            <p className='shadow-md pl-2 py-1 rounded-md' key={price + Math.random()}>
               {price.toLocaleString().split(',')[0]}$
            </p>
         ))}
      </div>
   )
}
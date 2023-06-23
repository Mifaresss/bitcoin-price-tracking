export function TableBody({ paginatedPrices }) {
   return (
      <div className='table__body'>
         {paginatedPrices.map(({ date, price }) => (
            <div className='table__body-section' key={date + Math.random()}>
               <p className='table__body-text shadow-md pl-2 py-1 rounded-md'>{new Date(date).toLocaleString()}</p>
               <p className='table__body-text shadow-md pl-2 py-1 rounded-md'>
                  {price.toLocaleString().split(',')[0]}$
               </p>
            </div>
         ))}
      </div>
   )
}

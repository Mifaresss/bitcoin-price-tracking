import { sort } from '@/store/priceSlice'
import { useDispatch } from 'react-redux'
import { ResetButton } from './ResetButton'

export function Sorter() {
   const dispatch = useDispatch()
   function handleChecked(e) {
      dispatch(sort({ type: e.target.id }))
   }

   return (
      <aside className='bg-zinc-800 w-full rounded-xl flex flex-col gap-7 justify-center sticky top-4 h-fit p-4'>
         <div className='sort-price flex flex-col gap-2.5 justify-start'>
            <p>Sort by price: </p>
            <div className='flex gap-2'>
               <label className='sort__label bg-zinc-900'>
                  Ascending
                  <input
                     onChange={handleChecked}
                     id='sort-price__asc'
                     type='radio'
                     className='sort__input'
                     name='sort'
                  />
               </label>
               <label className='sort__label bg-zinc-900'>
                  Descending
                  <input
                     onChange={handleChecked}
                     id='sort-price__desc'
                     type='radio'
                     className='sort__input'
                     name='sort'
                  />
               </label>
            </div>
         </div>
         <div className='sort-time flex flex-col gap-2.5 justify-start'>
            <p>Sort by time: </p>
            <div className='flex gap-2'>
               <label className='sort__label bg-zinc-900'>
                  First new
                  <input
                     onChange={handleChecked}
                     id='sort-time__new'
                     type='radio'
                     className='sort__input'
                     name='sort'
                  />
               </label>
               <label className='sort__label bg-zinc-900'>
                  First old
                  <input
                     onChange={handleChecked}
                     id='sort-time__old'
                     type='radio'
                     className='sort__input'
                     name='sort'
                  />
               </label>
            </div>
         </div>
         <ResetButton />
      </aside>
   )
}

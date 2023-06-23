import { sort } from '@/store/priceSlice'
import { toggleSorter } from '@/store/toggleSorterSlice'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ResetButton } from './ResetButton'

export function Sorter() {
   const dispatch = useDispatch()
   const isOpen = useSelector(state => state.toggleSorter.isOpen)
   const sorterRef = useRef()

   useEffect(() => {
      if (isOpen) {
         sorterRef.current.classList.add('open')
         document.body.style.overflowY = 'hidden'
      } else {
         sorterRef.current.classList.remove('open')
         document.body.style.overflowY = 'visible'
      }
   }, [isOpen])

   function handleChecked(e) {
      dispatch(sort({ type: e.target.id }))
   }
   function closeSorter(e) {
      if (e.target.classList.contains('sort__label') || e.target.classList.contains('reset-button')) {
         dispatch(toggleSorter({ isOpen: false }))
      }
   }

   return (
      <aside ref={sorterRef} onClick={closeSorter} className='wrapper-sorter'>
         <div className='sorter bg-zinc-800 w-full rounded-xl flex flex-col gap-7 justify-center sticky top-4 h-fit p-4'>
            <div className='sort-price flex flex-col gap-2.5 justify-start'>
               <p className='whitespace-nowrap'>Sort by price: </p>
               <div className='flex flex-wrap gap-2 overflow-hidden'>
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
               <div className='flex flex-wrap gap-2'>
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
         </div>
      </aside>
   )
}

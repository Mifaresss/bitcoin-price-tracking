const { createSlice } = require('@reduxjs/toolkit')

const toggleSorterSlice = createSlice({
   name: 'toggleSorter',
   initialState: {
      isOpen: false,
   },
   reducers: {
      toggleSorter(state, { payload }) {
         state.isOpen = payload.isOpen
      },
   },
})

export const { toggleSorter } = toggleSorterSlice.actions
export default toggleSorterSlice.reducer

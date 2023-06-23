import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPrice = createAsyncThunk('bitcoin/fetchPrice', async () => {
   try {
      const response = await fetch(
         `https://coin-realy.mobilauto.com.ua/v1/cryptocurrency/quotes/latest?id=1&${process.env.API_KEY}`
      )
      if (response.ok) {
         const generalData = await response.json()
         return generalData.data[1]
      } else {
         throw new Error('Error while getting data. Most likely 429 error (requests per minute limit exceeded)')
      }
   } catch (error) {
      throw error
   }
})

const priceSlice = createSlice({
   name: 'price',
   initialState: {
      loading: false,
      prices: [],
      timeout: 60000,
      error: null,
      currentPage: 1,
      pageSize: 14,
   },
   reducers: {
      changeTimeout(state, { payload }) {
         state.timeout = payload.timeout
      },
      sort(state, { payload }) {
         switch (payload.type) {
            case 'sort-price__asc':
               state.prices.sort((a, b) => a.price - b.price)
               break
            case 'sort-price__desc':
               state.prices.sort((a, b) => b.price - a.price)
               break
            case 'sort-time__new':
               state.prices.sort((a, b) => new Date(b.date) - new Date(a.date))
               break
            case 'sort-time__old':
               state.prices.sort((a, b) => new Date(a.date) - new Date(b.date))
               break
         }
      },
      clearPrices() {
         state.prices = []
      },
      setCurrentPage(state, { payload }) {
         state.currentPage = payload.currentPage
      },
   },

   extraReducers: builder => {
      builder
         .addCase(fetchPrice.pending, state => {
            state.loading = true
         })
         .addCase(fetchPrice.fulfilled, (state, { payload }) => {
            state.loading = false
            const date = new Date(payload.last_updated).getTime()
            const price = payload.quote.USD.price
            state.prices.unshift({ date, price })
         })
         .addCase(fetchPrice.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export const { changeTimeout, sort, clearPrices, setCurrentPage } = priceSlice.actions
export default priceSlice.reducer

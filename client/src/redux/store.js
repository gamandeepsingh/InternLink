import { configureStore } from '@reduxjs/toolkit'
import  coinSlice  from './slices/CoinCounter'

export const store = configureStore({
  reducer: {
    coin:coinSlice
  },
})
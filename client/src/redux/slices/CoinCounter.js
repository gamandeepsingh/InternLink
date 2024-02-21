import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 50,
}

export const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    decrementByAmount: (state,action) => {
      state.value -= action.payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})


export const { decrementByAmount, incrementByAmount } = coinSlice.actions

export default coinSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { mapData } from '../App';

// Define a type for the slice state

interface lpp {
  id: number;
}
export interface CounterState {
  initialState?: lpp[]
}

// Define the initial state using that type
const initialState: mapData[] = []
export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state: RootState, action)=>{
      console.log(action.payload)
      state.push(action.payload)
    },
    removeFromCart: (state: RootState, action)=>{
      return state.filter((product: {id: number})=>{
      return product.id !== action.payload
})
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart

export default cartSlice.reducer
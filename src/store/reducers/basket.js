import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: []
  },
  reducers: {
    addProduct(state, action) {
      state.basket.push(action.payload)

    }
  }
})

export const { addProduct } = basketSlice.actions

export default basketSlice.reducer

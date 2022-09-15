import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './reducers/basket'


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  }
})

export default store;

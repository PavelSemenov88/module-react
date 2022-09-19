import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './reducers/basket'
import uiSlice from "./reducers/ui-slice";


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  }
})

export default store;

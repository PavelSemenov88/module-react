import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './reducers/basket'
import uiSlice from "./reducers/ui-slice";
import userSlice from "./reducers/userSlice";


const store = configureStore({
  reducer: {
    cart: cartSlice,
    ui: uiSlice,
    user: userSlice,
  }
})

export default store;

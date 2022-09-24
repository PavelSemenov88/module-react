import { repluceData } from "./basket";
// import { showNotification } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandle = async () => {
      const res = await fetch('https://redux-http-4f4b5-default-rtdb.firebaseio.com/cartItems.json');
      const data = await res.json();
      return data;
    }
    try {
      const cartData = await fetchHandle();
      dispatch(repluceData(cartData))
    } catch(err) {
      // dispatch(showNotification({
      //   open: true,
      //   message: 'Sending Request To Fectch Data Failed',
      //   type: 'error',

      // }))
    }
  }
}


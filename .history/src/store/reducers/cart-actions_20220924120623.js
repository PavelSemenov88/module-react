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

export const sendCartData = (cart) => {
  return async () => {
    // dispatch(showNotification({
    //   open: true,
    //   message: 'Sending Request',
    //   type: 'warning',

    // }))
    // const sendRequest = async () => {

      const res = await fetch('https://redux-http-4f4b5-default-rtdb.firebaseio.com/cartItems.json', {
        method: "PUT",
        body: JSON.stringify(cart)
      });
      const data = await res.json();
      return data;


      // dispatch(showNotification({
      //   open: true,
      //   message: 'Sent Request TO Database SuccessFully',
      //   type: 'success',

      // }))
    // };
    // try {
      // await sendRequest();
    // } catch (err) {
      // dispatch(showNotification({
      //   open: true,
      //   message: 'Sending Request Failed',
      //   type: 'error',

      // }))
    // }
  }
}
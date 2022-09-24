import { repluceData } from "./basket";

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
    }
  }
}

export const sendCartData = (cart) => {
  return async () => {
    const sendRequest = async () => {

      const res = await fetch('https://redux-http-4f4b5-default-rtdb.firebaseio.com/cartItems.json', {
        method: "PUT",
        body: JSON.stringify(cart)
      });
      const data = await res.json();
      return data;

    };
    try {
      await sendRequest();
    } catch (err) {
      
    }
  }
}
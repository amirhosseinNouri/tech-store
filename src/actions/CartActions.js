const increaseCartIndex = () => {
  return { type: "INC_CART_INDEX" };
};
const decreaseCartIndex = () => {
  return { type: "DEC_CART_INDEX" };
};
const toggleCart = () => {
  return { type: "TOGGLE_CART" };
};

const closeCart = () => {
  return { type: "CLOSE_CART" };
};
const openCart = () => {
  return { type: "OPEN_CART" };
};
const addCartItem = (product) => {
  return { type: "ADD_CART_ITEM", paylaod: product };
};

const removeCartItem = (id) => {
  return { type: "REMOVE_CART_ITEM", payload: id };
};

export {
  increaseCartIndex,
  decreaseCartIndex,
  toggleCart,
  closeCart,
  openCart,
  addCartItem,
  removeCartItem,
};

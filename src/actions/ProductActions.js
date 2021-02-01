import products from "../data/productData";
const initialSetup = () => {
  const storeProducts = products.map((item) => {
    const { id } = item.sys;
    const image = item.fields.image.fields.file.url;
    const product = { id, ...item.fields, image };
    return product;
  });

  let featuredProducts = storeProducts.filter((item) => item.featured);
  const payload = { storeProducts, featuredProducts };

  return { type: "INITIAL_SETUP", payload };
};

const addToCart = (id) => {
  console.log(`${id} added to cart`);
  return { type: "ADD_TO_CART", payload: id };
};

const setSignleProduct = (id) => {
  return { type: "SET_SINGLE", payload: id };
};

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
const addCartItem = (id) => {
  return function (dispatch) {
    dispatch({ type: "ADD_CART_ITEM", payload: id });
    dispatch(openCart());
    dispatch(increaseCartIndex());
    dispatch(calculatePrice());
    dispatch(syncStorage())
    setTimeout(() => {
      dispatch(closeCart());
    }, 2000);
  };
};

const calculatePrice = () => {
  return { type: "CALC_PRICE" };
};

const syncStorage = () =>{
  return {type : "SYNC_STORAGE"}
}

const initializeCart = () =>{
  return {type :"INIT_CART"}
}

const removeCartItem = (id) => {
  return { type: "REMOVE_CART_ITEM", payload: id };
};

const initializeSingleProduct = () =>{
  return {type : "INIT_SINGLE"}
}

export {
  initialSetup,
  addToCart,
  setSignleProduct,
  increaseCartIndex,
  decreaseCartIndex,
  toggleCart,
  closeCart,
  openCart,
  addCartItem,
  removeCartItem,
  initializeCart,
  initializeSingleProduct
};

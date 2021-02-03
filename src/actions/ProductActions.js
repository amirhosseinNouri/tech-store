import products from "../data/productData";
const initialSetup = () => {
  return (dispatch) => {
    const storeProducts = products.map((item) => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });

    let featuredProducts = storeProducts.filter((item) => item.featured);
    const payload = { storeProducts, featuredProducts };

    dispatch({ type: "INITIAL_SETUP", payload });
    dispatch(initializeFilterParams())
  };
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

const adjustCartIndex = (id) => {
  return { type: "ADJUST_CART_INDEX", payload: id };
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
    dispatch(syncStorage());
    setTimeout(() => {
      dispatch(closeCart());
    }, 2000);
  };
};

const calculatePrice = () => {
  return { type: "CALC_PRICE" };
};

const syncStorage = () => {
  return { type: "SYNC_STORAGE" };
};

const initializeCart = () => {
  return { type: "INIT_CART" };
};

const initializeSingleProduct = () => {
  return { type: "INIT_SINGLE" };
};

// Cart page actions

const increaseQuantity = (id) => {
  return (dispatch) => {
    dispatch({ type: "INC_QUANTITY", payload: id });
    dispatch(increaseCartIndex());
    dispatch(calculatePrice());
    dispatch(syncStorage());
  };
};
const decreaseQuantity = (id) => {
  return (dispatch) => {
    dispatch({ type: "DEC_QUANTITY", payload: id });
    dispatch(decreaseCartIndex());
    dispatch(calculatePrice());
    dispatch(syncStorage());
  };
};

const removeCartItem = (id) => {
  return (dispatch) => {
    dispatch(adjustCartIndex(id));
    dispatch({ type: "REMOVE_CART_ITEM", payload: id });
    dispatch(calculatePrice());
    dispatch(syncStorage());
  };
};

const clearCart = () => {
  return (dispatch) => {
    dispatch({ type: "CLEAR_CART" });
    dispatch(syncStorage());
  };
};

// Filter
const initializeFilterParams = () =>{
  return {type : "INIT_FILTER_PARAMS"}
}
const sortData = () =>{
  return {type : "SORT_DATA"}
}
const handleFilterChange = (event) =>{
  return dispatch =>{

    dispatch({type : "HANDLE_FILTER_CHANGE" , payload : event.target})
    dispatch(sortData())
  }
}
export {
  initialSetup,
  setSignleProduct,
  increaseCartIndex,
  decreaseCartIndex,
  toggleCart,
  closeCart,
  openCart,
  addCartItem,
  removeCartItem,
  initializeCart,
  initializeSingleProduct,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  handleFilterChange 
};

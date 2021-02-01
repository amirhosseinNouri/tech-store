const initialState = {
  storeProducts: [],
  filteredProducts: [],
  featuredProducts: [],
  singleProducts: {},
  loading: false,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  cartOpen: false,
  cartIndex: 0,
  cartItems: [],
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL_SETUP":
      return {
        ...state,
        storeProducts: action.payload.storeProducts,
        filteredProducts: action.payload.storeProducts,
        featuredProducts: action.payload.featuredProducts,
      };

    case "INC_CART_INDEX":
      return { ...state, cartIndex: state.cartIndex + 1 };
    case "DEC_CART_INDEX":
      return { ...state, cartIndex: state.cartIndex - 1 };
    case "TOGGLE_CART":
      return { ...state, cartOpen: !state.cartOpen };
    case "CLOSE_CART":
      return { ...state, cartOpen: false };
    case "OPEN_CART":
      return { ...state, cartOpen: true };
    case "ADD_CART_ITEM":
      let tempCart = [...state.cartItems];
      let tempProducts = [...action.payload.storeProducts];
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default ProductReducer;

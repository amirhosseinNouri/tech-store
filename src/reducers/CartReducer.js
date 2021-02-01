const initialState = {
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  cartOpen: false,
  cartIndex: 0,
  cartItems: [],
};
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default CartReducer;

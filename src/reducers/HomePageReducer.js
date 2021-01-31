import linkData from '../data/linkData'
const initialState = {
  sidebarOpen: false,
  cartOpen: false,
  cartItems: 0,
  linkData
};

const HomePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cartItems: state.cartItems + 1 };
    case "REMOVE_ITEM":
      return { ...state, cartItems: state.cartItems - 1 };
    case "TOGGLE_CART":
      return { ...state, cartOpen: !state.cartOpen };
    case "TOGGLE_SIDEBAR":
      return { ...state, sidebarOpen: !state.sidebarOpen };
    default:
      return state;
  }
};

export default HomePageReducer;

const initialState = {
  sidebarOpen: false,
  cartOpen: false,
};

const HomePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return { ...state, cartOpen: !state.cartOpen };
    case "TOGGLE_SIDEBAR":
      return { ...state, sidebarOpen: !state.sidebarOpen };
    default:
      return state;
  }
};

export default HomePageReducer;

const initialState = {
  sidebarOpen: false,
  cartOpen: faslse,
};

const HomePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return { ...state, cartOpen: !cartOpen };
    case "TOGGLE_SIDEBAR":
      return { ...state, sidebarOpen: !sidebarOpen };
    default:
      return state;
  }
};

export default HomePageReducer;

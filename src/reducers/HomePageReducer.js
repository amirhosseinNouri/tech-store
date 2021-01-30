const HomePageReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, sidebarOpen: !sidebarOpen };
    default:
      return state;
  }
};

export default HomePageReducer;

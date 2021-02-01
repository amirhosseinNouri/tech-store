import linkData from "../data/linkData";
import socialData from "../data/socialData";
import serviceData from "../data/serviceData";
const initialState = {
  sidebarOpen: false,
  linkData,
  socialData,
  serviceData,
};

const HomePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, sidebarOpen: !state.sidebarOpen };
    default:
      return state;
  }
};

export default HomePageReducer;

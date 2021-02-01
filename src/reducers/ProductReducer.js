const initialState = {
  storeProducts: [],
  filteredProducts: [],
  featuredProducts: [],
  singleProducts: [],
  loading: false,
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
    default:
      return state;
  }
};

export default ProductReducer;

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
      let tempProducts = [...state.storeProducts];
      let tempItem = tempCart.find((item) => item.id === action.payload);
      if (!tempItem) {
        tempItem = tempProducts.find((item) => item.id === action.payload);
        let total = tempItem.price;
        let cartItem = { ...tempItem, count: 1, total };
        return { ...state, cartItems: [...state.cartItems, cartItem] };
      } else {
        tempItem.count++;
        tempItem.total = tempItem.price * tempItem.count;
        tempItem.total = parseFloat(tempItem.total.toFixed(2));
        return {
          ...state,
          cartItems: [
            ...state.cartItems.filter((item) => item.id !== action.payload),
            tempItem,
          ],
        };
      }

    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    case "CALC_PRICE":
      let subTotal = 0,
        total = 0,
        tax = 0;
      state.cartItems.forEach((item) => {
        subTotal += item.total;
      });
      tax += 0.2 * subTotal;
      total += tax + subTotal;
      return {
        ...state,
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total,
      };

    case "SYNC_STORAGE":
      const cart = {
        cartItem: state.cartItem,
        cartIndex: state.cartIndex,
        cartTotal: state.cartTotal,
        cartTax: state.cartTax,
        cartSubTotal: state.cartSubTotal,
      };
      localStorage.setItem("cart", JSON.stringify(cart));
      return state;

    case "INIT_CART":
      if (localStorage.getItem('cart')){
        const {
          cartItem,
          cartIndex,
          cartTotal,
          cartTax,
          cartSubTotal,
        } = JSON.parse(localStorage.getItem("cart"));
  
        return {
          ...state,
          cartItem,
          cartIndex,
          cartSubTotal,
          cartTax,
          cartTotal,
        };
      }
      return state

    default:
      return state;
  }
};

export default ProductReducer;

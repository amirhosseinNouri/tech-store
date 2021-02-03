const initialState = {
  storeProducts: [],
  filteredProducts: [],
  featuredProducts: [],
  singleProduct: {},
  loading: false,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  cartOpen: false,
  cartIndex: 0,
  cartItems: [],
  search: "",
  price: 0,
  min: 0,
  max: 0,
  company: "all",
  shipping: false,
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIAL_SETUP":
      // let minPrice = Math.min(...state.storeProducts.map((item) => item.price));
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

    case "ADJUST_CART_INDEX":
      let tempCount = state.cartItems.find((item) => item.id === action.payload)
        .count;
      return { ...state, cartIndex: state.cartIndex - tempCount };
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
        cartTax: tax.toFixed(2),
        cartTotal: total,
      };

    case "SYNC_STORAGE":
      const cart = {
        cartItems: state.cartItems,
        cartIndex: state.cartIndex,
        cartTotal: state.cartTotal,
        cartTax: state.cartTax,
        cartSubTotal: state.cartSubTotal,
      };
      localStorage.setItem("cart", JSON.stringify(cart));
      return state;

    case "INIT_CART":
      if (localStorage.getItem("cart")) {
        const {
          cartItems,
          cartIndex,
          cartTotal,
          cartTax,
          cartSubTotal,
        } = JSON.parse(localStorage.getItem("cart"));

        return {
          ...state,
          cartItems,
          cartIndex,
          cartSubTotal,
          cartTax,
          cartTotal,
        };
      }
      return state;

    case "SET_SINGLE":
      let product = state.storeProducts.find(
        (item) => item.id === action.payload
      );
      localStorage.setItem("singleProduct", JSON.stringify(product));
      return { ...state, singleProduct: { ...product }, loading: false };

    case "INIT_SINGLE":
      return {
        ...state,
        singleProduct: JSON.parse(localStorage.getItem("singleProduct")),
      };

    // Cart Page
    case "INC_QUANTITY":
      const tempCartItemInc = state.cartItems.find(
        (item) => item.id === action.payload
      );
      tempCartItemInc.count++;
      tempCartItemInc.total += tempCartItemInc.price;
      return { ...state };
    case "DEC_QUANTITY":
      const tempCartItemDec = state.cartItems.find(
        (item) => item.id === action.payload
      );
      tempCartItemDec.count--;
      tempCartItemDec.total -= tempCartItemDec.price;
      if (tempCartItemDec.count === 0) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload
          ),
        };
      }
      return { ...state };

    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_CART":
      return { ...state, cartItems: [] };

    // Filtering
    case "INIT_FILTER_PARAMS":
      let maxPrice = Math.max(...state.storeProducts.map((item) => item.price));
      return { ...state, max: maxPrice, price: maxPrice };

    case "HANDLE_FILTER_CHANGE":
      const name = action.payload.name;
      const value =
        action.payload.type === "checkbox"
          ? action.payload.checked
          : action.payload.value;
      return { ...state, [name]: value };

    case "SORT_DATA":
      const { storeProducts, price, company, shipping, search } = state;
      let sortedProducts = [...storeProducts];

      // Filtering base on company
      if (company !== "all") {
        sortedProducts = sortedProducts.filter(
          (item) => item.company === company
        );
      }

      // filtering base on price
      sortedProducts = sortedProducts.filter(
        (item) => item.price <= parseInt(price)
      );

      // Filtering based on shipping
      if (shipping) {
        sortedProducts = sortedProducts.filter((item) => item.freeShipping);
      }

      // Filtering based on search
      if (search.length > 0) {
        sortedProducts = sortedProducts.filter((item) => {
          let tempSearch = search.toLowerCase();
          let tempTitle = item.title.toLowerCase().slice(0, search.length);
          if (tempSearch === tempTitle) return item;
          else return null;
        });
      }
      return { ...state, filteredProducts: sortedProducts };

    default:
      return state;
  }
};

export default ProductReducer;

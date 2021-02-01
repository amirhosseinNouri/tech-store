import products from "../data/productData";
const initialSetup = () => {
  const storeProducts = products.map((item) => {
    const { id } = item.sys;
    const image = item.fields.image.fields.file.url;
    const product = { id, ...item.fields, image };
    return product;
  });

  let featuredProducts = storeProducts.filter((item) => item.featured);
  const payload = { storeProducts, featuredProducts };

  return { type: "INITIAL_SETUP", payload };
};

const addToCart = (id) => {
  console.log(`${id} added to cart`);
  return { type: "ADD_TO_CART", payload: id };
};

const setSignleProduct = (id) => {
  console.log(`${id} set as single product`);
  return { type: "SET_SINGLE", payload: id };
};

export { initialSetup, addToCart, setSignleProduct };

import products from "../data/productData";
const initialSetup = () => {
  const storeProducts = products.map((item) => {
    const { id } = item.sys;
    const product = { id, ...item.fields };
    return product;
  });

  let featuredProducts = storeProducts.filter((item) => item.featured);
  const payload = { storeProducts, featuredProducts };

  return { type: "INITIAL_SETUP", payload };
};

export { initialSetup };

import products from "../data/productData";
const initialSetup = () => {
  const storeProducts = products.map((item) => {
    const { id } = item.sys;
    const image = item.fields.image.fields.file.url
    const product = { id, ...item.fields , image };
    return product;
  });

  let featuredProducts = storeProducts.filter((item) => item.featured);
  const payload = { storeProducts, featuredProducts };

  return { type: "INITIAL_SETUP", payload };
};

export { initialSetup };

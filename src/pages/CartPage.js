import React from "react";
import CartSection from "../components/cartPage";
import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.jpeg";
export default function CartPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero img={cartBcg}></Hero>
      <CartSection></CartSection>
    </>
  );
}

import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Product from "../Product";
import Title from "../Title";

export default function Products() {
  const { storeProducts } = useSelector((state) => state.product);
  return (
    <Wrapper>
      <Title title="our products" center="true"></Title>
      <div className="products">
        {storeProducts.map((item) => {
          return <Product product={item} key={item.id}></Product>;
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 3rem;
  text-align: center;

  .products {
    margin: 3rem auto 1rem auto;
    justify-content: space-around;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    gap: 2rem;
    max-width: 920px;
  }
`;

import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Product from "../Product";
import Title from "../Title";
import Filter from "../Filter";

export default function Products() {
  const { filteredProducts } = useSelector((state) => state.product);
  return (
    <Wrapper>
      <Title title="our products" center="true"></Title>
      <Filter></Filter>
      <h6 className="filter-number">
        Total products : {filteredProducts.length}
      </h6>

      {filteredProducts.length === 0 ? (
        <h4 className="no-items">Sorry, no items matched your search.</h4>
      ) : (
        <div className="products">
          {filteredProducts.map((item) => {
            return <Product product={item} key={item.id}></Product>;
          })}
        </div>
      )}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 3rem;
  text-align: center;

  .products {
    margin: 3rem auto 1rem auto;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    row-gap: 2rem;
    column-gap: 3rem;
    max-width: 920px;
  }

  .filter-number {
    font-size: 1rem;
    padding: 2rem 0;
    border-bottom: 1px solid #ccc;
  }

  .no-items {
    margin-top: 4rem;
    font-size: 1.2rem;
  }
`;

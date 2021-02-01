import React from "react";
import Product from "../Product";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Title from "../Title";

export default function Featured() {
  const { featuredProducts } = useSelector((state) => state.product);
  return (
    <Wrapper>
      <Title title="featured products" center="true"></Title>
      <div className="items">
        {featuredProducts.map((item) => {
          return <Product product={item} key={item.id}></Product>;
        })}
      </div>
      <Link to="/products" className="btn" style={{ margin: "1.5rem" }}>
        out products
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 3rem 2rem 1rem 2rem;
  text-align: center;

  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    margin: 3rem auto 2rem auto;
    max-width: 900px;
    row-gap: 2rem;
    column-gap : 3rem;
    justify-content : center;
  }
`;

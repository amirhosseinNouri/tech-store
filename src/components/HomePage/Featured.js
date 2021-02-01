import React from "react";
import Product from "../Product";
import { Link } from "react-router-dom";
import TItle from "../Title";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Title from "../Title";

export default function Featured() {
  const { featuredProducts } = useSelector((state) => state.product);
  return (
    <Wrapper>
      <Title title="featured products"></Title>
      {featuredProducts.map((item) => {
          return <Product product={item} key={item.id}></Product>
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 3rem;
`;

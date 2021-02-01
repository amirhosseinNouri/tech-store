import React from "react";
import Product from "../Product";
import { Link } from "react-router-dom";
import TItle from "../Title";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Title from "../Title";

export default function Featured() {
  const { featuredProducts } = useSelector((state) => state.product);
  console.log(featuredProducts);
  return (
    <Wrapper>
      <Title title="featured products" center="true"></Title>
      <div className="items">
      {featuredProducts.map((item) => {
          return <Product product={item} key={item.id}></Product>
      })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 3rem;
  /* display : grid ;
  place-items : center;  */

  .items{
    display : grid ;
    margin-top : 2rem;
  }

  @media (min-width: 768px){
    .items{
      grid-template-columns : repeat(auto-fit , minmax(250px , auto));
    }
  }
`;

import React from "react";
import styled from "styled-components";

export default function CartColumns() {
  return (
    <Wrapper>
      <div className="column__item">products</div>
      <div className="column__item">Name of Product</div>
      <div className="column__item">Price</div>
      <div className="column__item">Quantity</div>
      <div className="column__item">Remove</div>
      <div className="column__item">Total</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    margin-top: 2.5rem;
    grid-template-columns: repeat(6, 1fr);
    display: grid;
    place-items: center;
  }
`;

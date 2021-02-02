import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function CartList() {
  const { cartItems } = useSelector((state) => state.product);

  if (cartItems.lenght === 0) {
    return <h1>Your cart is currently empty</h1>;
  }
  return (
    <Wrapper>
      {cartItems.map((item) => (
        <CartItem key={item.id} product={item}></CartItem>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
    margin-top : 2rem;
   display : grid;
   place-items : center;
`;

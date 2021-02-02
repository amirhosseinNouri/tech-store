import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function CartList() {
  const { cartItems } = useSelector((state) => state.product);

  if (cartItems.length === 0) {
    return <h1 className="empty">Your cart is currently empty</h1>;
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
  margin-top: 2rem;
  
`;

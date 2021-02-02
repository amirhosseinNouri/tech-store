import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import styled from "styled-components";

export default function Cart() {
  return (
    <Wrapper>
      <Title title="Your cart items" center="true"></Title>
      <CartColumns></CartColumns>
      <CartList></CartList>
      <CartTotal></CartTotal>
    </Wrapper>
  );
}

const Wrapper = styled.section`
padding : 5rem 2rem  3rem 2rem;

`;

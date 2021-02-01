import React from "react";
import { toggleCart } from "../actions/ProductActions";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

export default function SideCart() {
  const dispatch = useDispatch();
  const { cartOpen } = useSelector((state) => state.product);

  return (
    <Wrapper show={cartOpen} onClick={() => dispatch(toggleCart())}>
      <p>cart items</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 64px;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: var(--mainGrey);
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  @media (min-width: 576px) {
    width: 20rem;
  }
`;

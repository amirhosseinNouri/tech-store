import React from "react";
import { toggleCart } from "../actions/ProductActions";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SideCart() {
  const dispatch = useDispatch();
  const { cartOpen } = useSelector((state) => state.product);
  const { cartItems, cartTotal } = useSelector((state) => state.product);

  return (
    <Wrapper show={cartOpen} onClick={() => dispatch(toggleCart())}>
      <ul>
        {cartItems.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.image} alt="" />
              <h6>{item.title}</h6>
              <h6>Amount : {item.count}</h6>
            </li>
          );
        })}
      </ul>
      <h4>Cart Total : ${cartTotal}</h4>
      <Link to="/cart" className="btn">
        Cart Page
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 4rem 2rem;
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

  overflow: scroll;
`;

import React from "react";
import { useSelector , useDispatch } from "react-redux";
import styled from "styled-components";
import {clearCart} from '../../actions/ProductActions'
export default function CartTotal() {
  const dispatch = useDispatch()
  const { cartTotal, cartTax, cartSubTotal } = useSelector(
    (state) => state.product
  );
  return (
    <Wrapper>
      <button className="clear" onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <div className="price">Subtotal : ${cartSubTotal}</div>
      <div className="price">Tax : ${cartTax}</div>
      <div className="price">Total : ${cartTotal}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;

  .clear {
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 1px solid var(--mainDanger);
    color: var(--mainDanger);
    border-radius: 5px;
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
    transition: var(--mainTransition);
    font-size: 0.9rem;

    &:hover {
      color: var(--mainWhite);
      background-color: var(--mainDanger);
    }
  }
  .price {
      font-size : 1.4rem;
      letter-spacing : 2px;
      margin-bottom : 0.5rem;
      text-transform : capitalize;
     
  }
`;

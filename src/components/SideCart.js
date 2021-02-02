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
              <img 
              // src={item.image}
              src={`../${item.image}`}
               alt={item.title} />
              <h6 className="title">{item.title}</h6>
              <h6 className="amount">Amount : {item.count}</h6>
            </li>
          );
        })}
      </ul>
      <h4 className="total">Cart Total : ${cartTotal}</h4>
      <div className="botton-container">
        <Link to="/cart" className="btn">
          Cart Page
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2rem 1.5rem 6rem 1.5rem;
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

  ul {
    list-style-type: none;
  }

  li {
    margin-bottom: 1.3rem;

    img {
      display: block;
      width: 35px;
    }
    h6 {
      margin-top: 0.5rem;
    }
    .amount {
      font-size: 0.9rem;
      letter-spacing: 1px;
    }
  }
  .title {
    font-size : 0.8rem;
    letter-spacing : 1px;
    text-transform : capitalize;
  }
  .total {
    color: var(--primaryColor-2);
    margin-bottom: 2rem;
  }


  .botton-container {
    text-align: center;
  }
`;

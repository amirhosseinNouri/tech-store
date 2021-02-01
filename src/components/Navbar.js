import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { toggleSidebar } from "../actions/HomePageActions";
import { toggleCart } from "../actions/ProductActions";

export default function Navbar() {
  const dispatch = useDispatch();
  const { cartIndex } = useSelector((state) => state.product);
  return (
    <Wrapper>
      <div className="nav-center">
        <FaBars
          className="nav-icon"
          onClick={() => dispatch(toggleSidebar())}
        ></FaBars>
        <img src={logo} alt="Tech store Logo" />
        <div className="nav-cart">
          <FaCartPlus
            className="nav-icon"
            onClick={() => {
              dispatch(toggleCart());
            }}
          ></FaCartPlus>
          <div className="cart-items">{cartIndex}</div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  z-index: 1;
  position: --webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    background-color: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.8rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;

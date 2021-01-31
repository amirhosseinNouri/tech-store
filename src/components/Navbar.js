import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { toggleSidebar, toggleCart } from "../actions/HomePageActions";

export default function Navbar() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.homePage);
  console.log(cartItems);
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
            className="nac-icon"
            onClick={() => dispatch(toggleCart())}
          ></FaCartPlus>
          <div className="cart-items">{cartItems}</div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav``;

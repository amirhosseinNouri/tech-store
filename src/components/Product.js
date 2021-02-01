import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart, setSignleProduct } from "../actions/ProductActions";

export default function Product({ product }) {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="product__img">
        <img src={product.image} alt="" />
      </div>
      <div className="product__info">
        <span>{product.title}</span>
        <span>{product.price}</span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  padding: 2rem 2rem 1rem 2rem;
  background-color: var(--mainWhite);
  border: 1px solid #ccc;
  width: 250px;
  border-radius: 5px;
  margin-bottom : 2rem;

  .product__img {
    margin-bottom: 2.5rem;
    img {
      width: 100%;
      display: block;
    }
  }
  .product__info {
    display: flex;
    justify-content: space-between;
    align-items : center;
  }
`;

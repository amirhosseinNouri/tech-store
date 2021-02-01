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
        <span className="product__price">{product.price}</span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  padding: 2.5rem 2rem 1.5rem 2rem;
  background-color: var(--mainWhite);
  border: 1px solid #ccc;
  width: 250px;
  border-radius: 5px;
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.15);

  transition: var(--mainTransition);
  color: var(--mainBlack);

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
    align-items: center;

    span {
      font-size: 0.9rem;
    }
    .product__price {
      color: var(--primaryColor-2);
    }
  }

  &:hover {
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

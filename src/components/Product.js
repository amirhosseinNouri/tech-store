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
        <span className="product__title">{product.title}</span>
        <span className="product__price">${product.price}</span>
      </div>
      <div className="product__icons">
        <Link to={`/products/${product.id}`}>
          <FaSearch
            className="icon"
            onClick={() => dispatch(setSignleProduct(product.id))}
          ></FaSearch>
        </Link>

        <FaCartPlus
          className="icon"
          onClick={() => dispatch(addToCart(product.id))}
        ></FaCartPlus>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  position: relative;
  padding: 2.5rem 1rem 1rem 1rem;
  background-color: var(--mainWhite);
  border: 1px solid #ccc;
  width: 280px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
  transition: var(--mainTransition);
  color: var(--mainBlack);

  .product__img {
    margin-bottom: 2.5rem;
    transition: var(--mainTransition);

    img {
      width: 80%;
      display: block;
      margin: 0 auto;
    }
  }

  .product__icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    justify-content: center;
    opacity: 0;

    .icon {
      padding: 0.5rem;
      background-color: var(--mainBlack);
      color: var(--primaryColor);
      font-size: 2.5rem;
      border-radius: 0.5rem;
      margin: 1rem;
    }
  }

  .product__info {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 0.9rem;
    }
    .product__title {
      font-weight: bold;
      letter-spacing: 1.5px;
    }
    .product__price {
      color: var(--primaryColor-2);
    }
  }

  &:hover {
    box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;

    .product__img {
      transform: scale(1.15);
      opacity: 0.2;
    }

    .product__icons {
      opacity: 1;
      display: flex;
    }
  }
`;

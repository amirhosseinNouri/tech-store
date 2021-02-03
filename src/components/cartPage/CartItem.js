import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown,
} from "react-icons/fa";
import {
  decreaseQuantity,
  increaseQuantity,
  removeCartItem,
  setSignleProduct,
} from "../../actions/ProductActions";

export default function CartItem({ product }) {
  const dispatch = useDispatch();

  const { id, total, title, price, image, count } = product;
  return (
    <Wrapper>
      <Link
        to={`/products/${id}`}
        onClick={() => dispatch(setSignleProduct(id))}
      >
        <img src={image} alt={title} />
      </Link>
      <h2 className="title">
        <span className="placeholder">Product : </span>
        {title}
      </h2>
      <h4 className="price">
        <span className="placeholder">Price : </span>${price}
      </h4>
      <div className="quantity">
        <FaChevronCircleDown
          className="quantity-icon"
          onClick={() => dispatch(decreaseQuantity(id))}
        ></FaChevronCircleDown>
        <span className="quantity-count">{count}</span>
        <FaChevronCircleUp
          className="quantity-icon"
          onClick={() => dispatch(increaseQuantity(id))}
        ></FaChevronCircleUp>
      </div>
      <div className="trash">
        <FaTrash onClick={() => dispatch(removeCartItem(id))}></FaTrash>
      </div>
      <h4 className="total">${total}</h4>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: grid;
  place-items: center;
  margin-bottom: 1.5rem;
  padding-top : 1rem;

  img {
    display: block;
    width: 35px;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  .price {
      font-weight : 300;
    margin-bottom: 0.7rem;
  }

  .quantity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 200px;
    margin-bottom : 1rem;

    .quantity-count {
      margin: 0 0.5rem;
    }

    .quantity-icon {

      font-size: 1.2rem;
      color: var(--primaryColor-2);
      cursor: pointer;
    }
  }

  .trash {
    color: var(--mainDanger);
    cursor: pointer;
    margin-bottom : 1rem;
  }

  .total {
      display : none ;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);

    .placeholder {
      display: none;
    }
    .total {
      display: block;
    }
  }
`;

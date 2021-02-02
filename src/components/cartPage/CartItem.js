import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown,
} from "react-icons/fa";
import {
  decreaseQuantity,
  increaseQuantity,
  removeCartItem,
} from "../../actions/ProductActions";

export default function CartItem({ product }) {
  const dispatch = useDispatch();

  const { id, title, price, image, count } = product;
  return (
    <Wrapper>
      <img src={image} alt={title} />
      <h2>Product : {title}</h2>
      <h4>Price : ${price}</h4>
      <div className="buttons">
        <div className="quantity">
          <FaChevronCircleDown
            onClick={() => dispatch(decreaseQuantity(id))}
          ></FaChevronCircleDown>
          <span>{count}</span>
          <FaChevronCircleDown
            onClick={() => dispatch(increaseQuantity(id))}
          ></FaChevronCircleDown>
        </div>
        <FaTrash onClick={() => dispatch(removeCartItem(id))}></FaTrash>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  padding: 2rem;
`;

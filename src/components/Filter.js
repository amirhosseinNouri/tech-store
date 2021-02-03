import React from "react";
import styled from "styled-components";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Actions
import {
  handlePrice,
  handleMax,
  handleShipping,
  handleSearch,
  handleCompany,
} from "../actions/ProductActions";

export default function Filter() {
  const dispatch = useDispatch();
  const {
    storeProducts,
    search,
    price,
    min,
    max,
    company,
    shipping,
  } = useSelector((state) => state.product);
  return (
    <Wrapper>
      {/* Text Search */}
      <div className="filter-control">
        <label htmlFor="search">Search products</label>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={() => dispatch(handleSearch())}
        />
      </div>
      {/* Category Search */}
      <div className="filter-control">
        <label htmlFor="company">Company</label>
        <select
          name="company"
          id="company"
          value={company}
          onChange={() => dispatch(handleCompany())}
        >
          <option value="all">all</option>
          <option value="fuji">fuji</option>
          <option value="htc">htc</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="filter-control">
        <label htmlFor="price">
          product price : <span>${price}</span>
        </label>
        <input
          type="range"
          name="price"
          id="price"
          min={min}
          max={max}
          value={price}
          onChange={() => dispatch(handlePrice())}
        />
      </div>

      {/* Free shipping */}
      <div className="filter-cont">
        <label htmlFor="shipping">Free Shipping</label>
        <input
          type="checkbox"
          name="shipping"
          id="shipping"
          onChange={() => dispatch(handleShipping())}
          value={shipping && true}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

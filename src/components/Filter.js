import React from "react";
import styled from "styled-components";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Actions
import { handleFilterChange } from "../actions/ProductActions";

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
  let uniqueCompanies = new Set();
  uniqueCompanies.add("all");
  storeProducts.map((item) => uniqueCompanies.add(item.company));
  uniqueCompanies = [...uniqueCompanies];
  const companyOptions = uniqueCompanies.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

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
          onChange={(e) => dispatch(handleFilterChange(e))}
        />
      </div>
      {/* Category Search */}
      <div className="filter-control">
        <label htmlFor="company">Company</label>
        <select
          className="filter-item"
          name="company"
          id="company"
          value={company}
          onChange={(e) => dispatch(handleFilterChange(e))}
        >
          {companyOptions}
        </select>
      </div>

      {/* Price Range */}
      <div className="filter-control">
        <label htmlFor="price">
          product price : <span>${price}</span>
        </label>
        <input
          className="filter-price"
          type="range"
          name="price"
          id="price"
          min={min}
          max={max}
          value={price}
          onChange={(e) => dispatch(handleFilterChange(e))}
        />
      </div>

      {/* Free shipping */}
      <div className="filter-shipping">
        <label htmlFor="shipping">Free Shipping</label>
        <input
          className="shipping"
          type="checkbox"
          name="shipping"
          id="shipping"
          onChange={(e) => dispatch(handleFilterChange(e))}
          checked={shipping && true}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 1rem;
  column-gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  .filter-control {
    text-align: left;

    label {
      text-transform: capitalize;
      margin-bottom: 0.5rem;
      display: block;
    }

    input,
    .filter-item {
      display: block;
      width: 100%;
      background-color: transparent;
      border-radius: 5px;
      border: 2px solid var(--darkGrey);
    }
  }

  .shipping {
    margin-left: 0.5rem;
  }
  .filter-shipping {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  select {
    text-transform: capitalize;
  }
`;

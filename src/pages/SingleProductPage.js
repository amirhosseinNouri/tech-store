import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Hero from "../components/Hero";
import singleProductImg from "../images/singleProductBcg.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/ProductActions";

export default function SingleProductPage() {
  const dispatch = useDispatch();
  const { singleProduct, loading } = useSelector((state) => state.product);
  const { company, description, image, title, id, price } = singleProduct;
  return (
    <>
      <Hero img={singleProductImg}></Hero>
      {loading ? <h2>Loading...</h2> : null}
      <Wrapper>
        <div className="img-container">
          <img src={`../${image}`} alt="product image" />
        </div>
        <div className="info-container">
          <h5>Model : {title}</h5>
          <h5>company : {company}</h5>
          <h5 className="price">price : ${price}</h5>
          <p>Some info about product :</p>
          <p>{description}</p>
          <button
            type="button"
            className="btn"
            onClick={() => dispatch(addToCart(id))}
          >
            Add to cart
          </button>
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.section``;

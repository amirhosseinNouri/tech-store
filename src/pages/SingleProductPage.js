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
          <h5 className="title">Model : {title}</h5>
          <h5>company : {company}</h5>
          <h5 className="price">price : ${price}</h5>
          <p className="desc-title">Some info about product :</p>
          <p>{description}</p>
          <div className="buttons">
            <button
              type="button"
              className="btn"
              onClick={() => dispatch(addToCart(id))}
            >
              Add to cart
            </button>
            <Link to="/products" className="btn">
              Back to products
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.section`
  padding: 3rem;
  display: grid;
  place-items: center;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  .img-container {
    img {
      display: block;
      width: 100%;
    }
  }

  .info-container {
    h5 {
      margin-bottom: 1rem;
      font-size: 1rem;
      font-weight: 300;
    }

    .title {
      letter-spacing: 1px;
      font-weight: bold;
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
    .price {
      color: var(--primaryColor-2);
    }

    .desc-title {
      font-weight: bold;
      margin-bottom: 1rem;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 420px;
    margin-top: 2rem;

    button {
      font-size: 0.9rem;
      margin-bottom: 2rem;
    }
    a {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
  }
`;

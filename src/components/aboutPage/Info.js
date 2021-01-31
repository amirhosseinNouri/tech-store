import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
import styled from "styled-components";

export default function Info() {
  return (
    <Wrapper>
      <div className="img-container">
        <img
          src={aboutBcg}
          className="img-fluid img-thumbnail"
          alt="about company"
        />
      </div>
      <div className="title-container">
        <Title title="about us"></Title>
        <p className="text-lead text-muted my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id sint
          inventore doloremque dicta facere aliquid corrupti maiores commodi,
          minima nobis.
        </p>
        <p className="text-lead text-muted my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id sint
          inventore doloremque dicta facere aliquid corrupti maiores commodi,
          minima nobis.
        </p>
        <button className="btn info-btn" type="button">
          More info
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto;
  padding: 4rem 1rem;
  display: grid;
  gap: 1.5rem;
  max-width: 85vw;

  img {
    width: 100%;
    display: block;
    border: 4px solid var(--mainBlack);
  }

  .title-container p {
    margin-top: 1rem;
  }

  .info-btn {
    margin: 2rem 0;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1.5fr 1fr;
    padding: 5rem 6rem;
    max-width: 95vw;

    .info-btn {
      margin: 1.5rem 0;
    }
  }

  @media (min-width: 1170px) {
    .img-container {
      display: grid;
      place-items: center;
    }
    img {
      width: 80%;
    }
  }
`;

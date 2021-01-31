import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
import styled from "styled-components";

export default function Info() {
  return (
    <Wrapper>
      <div>
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
  padding : 5rem 6rem; 
  display : grid ;
  grid-template-columns : 1fr;
  gap : 0.8rem ;

  img{
    width : 90%;
    display : block;
    border : 4px solid var(--mainBlack);
  }

  .title-container p {
    margin-top : 1rem;
  }

  .info-btn {
    margin : 2rem 0 ;
  }

  @media (min-width : 768px){
    grid-template-columns : 1fr 1fr;
  }
  
`;

import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Services() {
  const { serviceData } = useSelector((state) => state.homePage);
  console.log(serviceData);
  return (
    <Wrapper>
      {serviceData.map((item) => {
        return (
          <div key={item.id} className="service__item">
            <div className="service__icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: grid;
  place-items: center;
  margin: 0 auto;
  background-color: rgba(95, 183, 234, 0.5);
  text-align: center;
  padding: 4rem 2rem 1rem 2rem;

  .service__item {
    margin-bottom: 2rem;
    max-width: 300px;

    h4 {
      margin-bottom: 1rem;
      text-transform: capitalize;
      font-weight: normal;
    }
  }

  .service__icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  p {
    color: var(--darkGrey);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }
`;

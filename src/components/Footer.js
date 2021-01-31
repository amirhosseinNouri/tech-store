import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Footer() {
  const { socialData } = useSelector((state) => state.homePage);
  return (
    <Wrapper>
      <div className="footer__title">
        <p className="text-capitalize">
          copyright &copy; tech store {new Date().getFullYear()}. all rights
          reserved
        </p>
      </div>
      <div className="footer__icons">
        {socialData.map((item) => {
          return (
            <a key={item.id} href={item.url}>
              {item.icon}
            </a>
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.footer`
  margin: 0 auto;
  padding: 1.5rem 2rem;
  text-align: center;
  display: grid;
  row-gap: 0.8rem;
  background-color: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
    cursor: pointer;
    &:hover {
      color: var(--primaryColor);
    }
  }
  .footer__title {
    margin-bottom: 1rem;
  }

  .footer__icons {
    display: flex;
    justify-content: space-around;
  }

  @media (min-width: 768px) {
    text-align: left;
    padding: 1.5rem 3rem;
    grid-template-columns: 1fr 1fr;
    /* justify-content : center; */
    align-items: center;
  }
`;

import React from "react";
import Title from "../Title";
import styled from "styled-components";

export default function Contact() {
  return (
    <Wrapper>
      <Title title="Contact Us"></Title>
      <form
        action="https://formspree.io/f/mqkgjkvj"
        method="POST"
        className="contact"
      >
        <div className="input-container">
          <input type="text" name="name" placeholder="John smith" />
        </div>
        <div className="input-container">
          <input type="email" name="email" placeholder="email@email.com" />
        </div>
        <div className="input-container">
          <input type="text" name="subject" placeholder="importante!!!" />
        </div>
        <div className="input-container">
          <textarea name="message" rows="10" placeholder="Hello"></textarea>
        </div>
        <div className="input-container">
          <input type="submit" value="Send" />
        </div>
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 3rem 2.5rem;
  margin: 0 auto;
  /* max-width: 75vw; */

  .contact {
    margin-top: 2rem;
  }

  .input-container {
    margin-bottom: 1rem;

    input {
      display: inline-block;
      width: 100%;

      height: 33px;
      padding: 0.5rem;
      outline: none;

      &:focus {
        outline: 3px solid var(--primaryColor);
        border: none;
      }
    }

    input[type="submit"] {
      background-color: var(--primaryColor);
      border: 2px solid var(--primaryColor);
      color: var(--mainWhite);
      outline: none;
      display: inline-block;
      height: 40px;
      cursor: pointer;
    }

    textarea {
      padding: 0.5rem;
      width: 100%;
      min-height: 200px;
      outline: none;
      &:focus {
        outline: 3px solid var(--primaryColor);
        border: none;
      }
    }
  }

  @media (min-width: 768px) {
    max-width: 60vw;
    input,
    textarea {
      max-width: 50vw;
    }
  }
`;

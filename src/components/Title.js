import React from "react";
import styled from "styled-components";

export default function Title({ title, center }) {
  return (
    <Wrapper className="row" center={center}>
      <div className="column">
        <h2 className="text-title">{title}</h2>
        <div className="title-underline"></div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: ${(props) => (props.center ? "center" : "left")};

  .title-underline {
    height: 0.25rem;
    width: 7rem;
    background-color: var(--primaryColor);
    margin: ${(props) => (props.center ? "0 auto" : "0")};
  }
`;

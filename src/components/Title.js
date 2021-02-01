import React from "react";
import styled from "styled-components";

export default function Title({ title, center }) {
  return (
    <Wrapper center={center}>
      <div>
        <h2 className="text-title">{title}</h2>
        <div className="title-underline"></div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: ${(props) => (props.center ? "center" : "left")};

  h2 {
    margin-bottom: 0.9rem;
  }

  .title-underline {
    height: 0.25rem;
    width: 9rem;
    background-color: var(--primaryColor);
    margin: ${(props) => (props.center ? "0 auto" : "0")};
  }
`;

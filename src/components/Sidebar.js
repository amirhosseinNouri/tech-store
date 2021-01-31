import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {  toggleSidebar } from "../actions/HomePageActions";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { linkData, sidebarOpen } = useSelector((state) => state.homePage);
  return (
    <Wrapper show={sidebarOpen}>
      <ul>
        {linkData.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className="sidebar-link"
              onClick={() => dispatch(toggleSidebar())}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--mainGrey);
  z-index: 1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};

  ul {
    list-style-type: none;
    padding: 0;
  }
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--mainBlack);
    padding: 0.5rem 1.5rem;
    background-color: transparent;
    transition: var(--mainTransition);

    &:hover {
      background-color: var(--primaryColor);
      color: var(--mainWhite);
      padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    }
  }
  a {
    text-decoration: none;
  }

  @media (min-width: 576px) {
    width: 20rem;
  }
`;

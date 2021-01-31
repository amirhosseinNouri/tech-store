import React from "react";
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";

export default function Sidebar() {
  const { linkData } = useSelector((state) => state.homePage);
  console.log(linkData);
  return <div>Side bar</div>;
}



import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import {useDispatch} from 'react-redux'
import {addToCart} from '../actions/ProductActions'

export default function Product({product}) {
    const dispatch = useDispatch()
  return <div>Product</div>;
}

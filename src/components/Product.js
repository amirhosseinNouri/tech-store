import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import {useDispatch} from 'react-redux'
import {addToCart , setSignleProduct} from '../actions/ProductActions'

export default function Product({product}) {
    const dispatch = useDispatch()
  return <Wrapper>
      <div className="product__img">
          <img src={product.image} alt=""/>
      </div>
      <div className="product__info">
          <span>{product.title}</span>
          <span>{product.price}</span>
      </div>
  </Wrapper>;
}

const Wrapper = styled.article`
   
`

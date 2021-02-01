import React , {useEffect} from "react";
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import Services from '../components/HomePage/Services'
import Featured from '../components/HomePage/Featured'
import {useDispatch , useSelector} from 'react-redux'
import {initialSetup} from '../actions/ProductActions'

export default function HomePage() {
  const dispatch = useDispatch()
  const product = useSelector(state => state.product)
  console.log(product);

  useEffect(() => {
    dispatch(initialSetup())
  } , [])

  return <>
  <Hero title="awesome gadgets" max="true">
    <Link style={{marginTop : "2rem"}} className="btn" to="/products">our products</Link>
  </Hero>
  <Services></Services>
  <Featured></Featured>
  </>;
}

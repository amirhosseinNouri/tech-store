import React from "react";
import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpeg";
import {Link} from 'react-router-dom'

export default function Error() {
  return <Hero img={defaultBcg} title="404" max="true">
      <h2 className="text-uppercase">Page not found</h2>
      <Link to="/" className="btn">Return home</Link>
  </Hero>
}


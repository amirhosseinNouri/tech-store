import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product)
  console.log(product);

  return <div>Products page</div>;
}

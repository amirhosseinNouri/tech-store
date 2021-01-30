import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function HomePage() {
  const dispatch = useDispatch();
  const homePage = useSelector((state) => state.homePage);
  return <div>Home page</div>;
}

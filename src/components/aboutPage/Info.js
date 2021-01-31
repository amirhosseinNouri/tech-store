import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about company"
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us"></Title>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id sint
              inventore doloremque dicta facere aliquid corrupti maiores
              commodi, minima nobis.
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id sint
              inventore doloremque dicta facere aliquid corrupti maiores
              commodi, minima nobis.
            </p>
            <button className="btn" type="button">More info</button>
          </div>
        </div>
      </div>
    </section>
  );
}

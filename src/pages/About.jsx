import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="border p-4 rounded" style={{ width: "50%" }}>
          <div className="">
          <h4 className=" text-center varela-font">FamilyTime</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h5 className="fw-bold Roboto-font">Thank you For your Order!</h5>
            <p>
              Your order is currrently processing.you will receive additional
              information via a separate email
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Link></Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>Lily Mocurdy</p>
              <p>lilymocurdy313@gmail.com</p>
              <p>215 little dog Dr motgomery Texas 77356 United States</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h5>
                Order ID:<span>FAM 240930-7153-63147</span>
              </h5>
              <h5>
                1. FamilyTime Premium 1 Device <br /> $29.00
              </h5>
              <h5>Total:$0.00</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4>Happy Parenting</h4>
              <h4>Family Time Support</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

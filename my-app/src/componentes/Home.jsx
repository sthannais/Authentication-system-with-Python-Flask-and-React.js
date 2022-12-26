import React from "react";
import "../styles/Home.css";

const Home = () => {
  document.body.style.backgroundColor = "#F7DCDB";
  return (
    <div className="about">
      <div className="d-flex flex-row">
        <div className="col-md abouttitle title">
          <h2>Schedule with us your manicure and pedicure!</h2>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="card aboutcard">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src="https://i.pinimg.com/736x/14/17/06/141706a6f73706e73c3669af377d8d3f.jpg"
                className="img-fluid rounded-start"
                alt="About us"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <p className="card-text aboutcardtext title">
                  In order to serve you with us you must register on our page
                  and request your time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

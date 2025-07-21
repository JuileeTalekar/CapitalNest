import React from 'react';

const Hero = () => {
    return ( 
        <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/Images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5"><span style={{color:"#0d6efd"}}>Invest</span> in the future</h1>
        <p>
          Join the thousands of investors who are already using our platform to
          build their portfolios.
        </p>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary btn-lg mt-3"
            style={{ backgroundColor: "#0d6efd", color: "white" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
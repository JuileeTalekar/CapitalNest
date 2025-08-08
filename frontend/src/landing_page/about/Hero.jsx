import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 bg-white ">
      <div className="mb-10 px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold leading-tight">
          We <span className="text-blue-600">pioneered</span> the discount broking model in India.<br />
          Now, we are breaking ground with our <span className="text-blue-600">technology</span>.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-10 border-t border-gray-200 pt-10 text-gray-500" style={{lineHeight: "1.8"}}>
        <div className="md:w-1/2 space-y-6">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company <span className="underline decoration-blue-500">Prospera</span>, which is derived from the Latin root "prosperus", which means successful., the Latin word for fortune.
          </p>
          <p>
            Today, our <span className="underline decoration-blue-500">disruptive pricing models</span> and in-house technology have made us the biggest stock broker in India.
          </p>
          <p>
            <span className="underline decoration-blue-500">Over 1+ Crore clients</span> place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes
          </p>
        </div>
        <div className="md:w-1/2 space-y-6">
          <p>
            In addition, we run a number of popular open online <span className="underline decoration-blue-500">educational and community initiatives</span> to empower retail traders and investors.
          </p>
          <p>
            <span className="underline decoration-blue-500">
              <Link
                to="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                className="hover:text-blue-600 transition-colors"
              >
                Prospera
              </Link>
            </span>
            , our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, <span className="underline decoration-blue-500">we are always up to something new</span> every day. Catch up on the latest updates on our blog or see what the media is saying about us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

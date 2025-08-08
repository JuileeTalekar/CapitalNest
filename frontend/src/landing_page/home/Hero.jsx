import React from "react";



const Hero = () => {

  return (
    <section className=" py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Hero Image */}

          <img
            src="/media/Images/homeHero.png"
            alt="Hero Image"
            className="mb-5"
          />

          {/* Hero Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-blue-600">Invest</span> in the future
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Join thousands of investors building their portfolios with our
              comprehensive trading platform.
            </p>

            {/* CTA Button */}
<button className="w-48 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white text-xl font-bold px-6 py-3 rounded-lg">
  Get Started
</button>


          </div>

          <div className="pt-8">
            <p className="text-sm text-gray-500 mb-2">
              Start your investment journey today
            </p>
            <p className="text-sm text-gray-500">No minimum deposit required</p>
          </div>

          {/* Trust indicators */}
          <div className="pt-12">
            <p className="text-sm text-gray-500 mb-8">
              Trusted by 2+ million investors
            </p>

            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  ₹50K+
                </div>
                <div className="text-sm text-gray-500">Avg. Portfolio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  4.8★
                </div>
                <div className="text-sm text-gray-500">User Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  24/7
                </div>
                <div className="text-sm text-gray-500">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;

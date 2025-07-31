
import React from "react";

const Footer = () => {
    return ( 
        <>
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-5 pb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Stay Ahead of the Market
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Get exclusive market insights, trading tips, and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <button className="btn btn-primary w-48 hover:bg-blue-700 transition-colors duration-300 text-white text-xl font-bold px-6 py-3 rounded-lg">
             Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <img src="/logo.svg" alt="CapitalNest Logo" className="w-10 h-10 mr-3" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                CapitalNest
              </span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md mx-auto lg:mx-0">
              India's leading discount broker offering zero brokerage equity investments, 
              cutting-edge trading platforms, and comprehensive financial services.
            </p>
            
            {/* Social Media */}
   <div className="flex gap-3">
  {[
    { icon: "fa-x-twitter", href: "#" },
    { icon: "fa-square-facebook", href: "#" },
    { icon: "fa-instagram", href: "#" },
    { icon: "fa-linkedin-in", href: "#" },
    { icon: "fa-youtube", href: "#" },
    { icon: "fa-whatsapp", href: "#" },
  ].map((item, index) => (
    <a
      key={index}
      href={item.href}
      className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center text-lg"
      style={{textDecoration: "none"}}
    >
      <i className={`fa-brands ${item.icon}`} />
    </a>
  ))}
</div>


          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Company
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "About", "Products", "Pricing", 
                "Careers", "CapitalNest.tech", "Press & Media", "Referral Programme", "CapitalNest Cares (CSR)"
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                   className="text-white hover:text-gray-300 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                   style={{ textDecoration: "none" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Support
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "Contact Us", "Support Portal", "P-Connect Blog", "List of Charges",
                 "Videos", "Market Overview", "File a Complaint",
                "Complaint Status","Downloads & Resources"
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                   className="text-white hover:text-gray-300 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                   style={{ textDecoration: "none" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white relative">
              Account
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400"></div>
            </h3>
            <ul className="space-y-3">
              {["Open an Account", "Fund Transfer", "60-Day Challenge"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                   className="text-white hover:text-gray-300 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                   style={{ textDecoration: "none" }}
                  >
                    {item}
                  </a >
                </li>
              ))}
            </ul>
            
          
          </div>
        </div>

        {/* Compliance & Legal Section */}
        <div className="pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Legal Information */}
            <div className="h-full">
              <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 h-full flex flex-col">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <i className="fas fa-shield-alt mr-2 text-blue-400"></i>
                  Regulatory Information
                </h4>
                <div className="text-sm text-slate-400 leading-relaxed space-y-3 flex-grow">
                  <p>
                    <strong className="text-slate-300">CapitalNest Broking:</strong> Member of NSE, BSE & MCX. Depository services through CapitalNest Broking. 
                    Commodity Trading through CapitalNest Commodities MCX.
                  </p>
                  <p>
                    <strong className="text-slate-300">Registered Address:</strong> CapitalNest Broking, Sainagri Apartment, Dhankawadi, Pune - 411043, India.
                  </p>
                  <p>
                    For complaints regarding securities broking: 
                    <a href="mailto:complaints@capitalnest.com" className="text-blue-400 hover:text-blue-300 transition-colors mx-1 underline">
                      complaints@capitalnest.com
                    </a> 
                    | For DP-related: 
                    <a href="mailto:dp@capitalnest.com" className="text-blue-400 hover:text-blue-300 transition-colors mx-1 underline">
                      dp@capitalnest.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Investor Protection */}
            <div className="h-full">
              <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 h-full flex flex-col">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <i className="fas fa-user-shield mr-2 text-emerald-400"></i>
                  Investor Protection
                </h4>
                <ul className="space-y-3 text-sm text-slate-400 leading-relaxed flex-grow">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-emerald-400 mr-2 mt-0.5 text-xs"></i>
                    Stock brokers can accept securities as margin only via pledge
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-emerald-400 mr-2 mt-0.5 text-xs"></i>
                    Update email/phone to receive OTPs from depository
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-emerald-400 mr-2 mt-0.5 text-xs"></i>
                    Check holdings in monthly NSDL/CDSL statements
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-emerald-400 mr-2 mt-0.5 text-xs"></i>
                    KYC is one-time - no need to repeat with every intermediary
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 ">
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-4 mb-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { name: "NSE", icon: "fas fa-chart-line" },
                { name: "BSE", icon: "fas fa-chart-bar" },
                { name: "MCX", icon: "fas fa-coins" },
                { name: "Terms & Conditions", icon: "fas fa-file-contract" },
                { name: "Privacy Policy", icon: "fas fa-shield-alt" },
                { name: "Disclosure", icon: "fas fa-eye" },
                { name: "Investor's Attention", icon: "fas fa-exclamation-circle" },
                { name: "Investor Charter", icon: "fas fa-scroll" }
              ].map((item) => (
                <a
                  key={item.name}
                  href="#"
                 className="flex items-center text-white hover:text-gray-300 transition-colors duration-200 group"
                  style={{ textDecoration: "none" }}
                 
                >
                  <i className={`${item.icon} mr-2 text-xs group-hover:scale-110 transition-transform`}></i>
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
            <p className="text-slate-400 text-sm">
              © 2024 - 2025, CapitalNest Broking Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
        </>
     );
}
export default Footer;
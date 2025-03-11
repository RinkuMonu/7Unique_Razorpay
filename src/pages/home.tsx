import { Link } from "react-router-dom";
import heroImage from "../asstes/images/hero-illustration-removebg.png";
import dottedRow from "../asstes/images/feature-section1-dottedrows.png";
import paymentSuit from "../asstes/images/payment-suite.png";
import paymentLink from "../asstes/images/payment-link-icon.svg"
import featureSec from "../asstes/images/feature-section-2BG.svg"
import Xflame1 from "../asstes/images/x-flame-1.png";
import Xflame2 from "../asstes/images/x-flame-2.png";
import businessBanking from "../asstes/images/buisness-banking.png";
import currentIcon from "../asstes/images/current-icon.svg"
import razorpayX from "../asstes/images/razorpayX.svg";
import { useEffect } from "react";
import feather from "feather-icons";
export default function Home() {
    useEffect(() => {
        // Initialize Feather icons after component mounts
        feather.replace();
      }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#02042b] text-white px-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-up">
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Transform Your Business with Smart Payment Solutions
              </h1>
              <p className="text-xl mb-8">
                Accept payments globally, grow your business, and delight your
                customers with our secure payment gateway.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/signup"
                  className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100"
                >
                  Get Started
                </Link>
                <Link
                  to="/contact"
                  className="border border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="md:flex md:items-center md:justify-center">
              <img
                src={heroImage}
                alt="Payment Dashboard"
                className="rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- feature section 1--> */}
      <section className="py-10 relative  overflow-hidden">
      {/* Background Dotted Images */}
      <img
        src={dottedRow}
        alt="Decorative Dotted Row"
        loading="lazy"
        width="233"
        height="167"
        className="absolute -top-[8rem] left-[10rem] inline-block -z-10"
      />
      <img
        src={dottedRow}
        alt="Decorative Dotted Row"
        loading="lazy"
        width="233"
        height="167"
        className="absolute top-[4.5rem] right-0 inline-block rotate-180"
      />

      <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
        {/* Heading */}
        <h2 className="font-mullish text-center text-2xl  font-extrabold leading-[1.2] hidden md:block">
          Accept Payments with Razorpay Payment Suite
        </h2>
        <h2 className="font-mullish text-center text-5xl leading-[1.2] font-extrabold  md:hidden">Explore Razorpay Payment
          Suite</h2>
        <div className="w-6 h-1 bg-green-300 mx-auto mb-6"></div>

        {/* Content Box */}
        <div className="w-full min-h-[520px] bg-white flex flex-col lg:flex-row rounded-md relative p-10 py-12 border">
          {/* Left Section */}
          <div className="flex flex-col justify-between w-full ">
            <h3 className="font-mullish text-2xl font-bold leading-10 max-w-[500px] mb-6">
              Supercharge your business with the all‑powerful{" "}
              <span className="text-blue-500">Payment Gateway</span>
            </h3>
            <ul className="space-y-2 ">
              {[
                "100+ Payment Methods",
                "Industry Leading Success Rate",
                "Superior Checkout Experience",
                "Easy to Integrate",
                "Instant Settlements from day 1",
                "In-depth Reporting and Insights",
              ].map((text, idx) => (
                <li key={idx} className="font-mullish flex items-center space-x-2">
                  <i data-feather="check" className="text-green-300"></i>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col md:flex-row items-center space-x-4">
              <button className="bg-lightBlue w-full md:w-auto text-white py-3 px-6 rounded-md font-bold hover:bg-lightBlue500 transition-all duration-200">
                Sign Up Now
              </button>
              <div className="flex items-center cursor-pointer group">
                <a
                  href="#"
                  className="font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                >
                  Know More
                </a>
                <i
                  data-feather="chevron-right"
                  className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                ></i>
              </div>
            </div>
          </div>

          {/* Image */}
          <img
            src={paymentSuit}
            alt="Razorpay Payment Suite"
            className="max-w-[600px] absolute right-0 bottom-0 hidden md:block lg:block"
          />
        </div>

        {/* Box Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {Array(6)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="w-full min-h-[15rem] relative cursor-pointer group">
                <img
                  src={paymentLink}
                  alt="Payment Link Icon"
                  className="bg-blue-500  absolute right-3 top-3 w-12 h-12 rounded-full  transition-all duration-200"
                />
                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="stroke-1 stroke-[#818597] h-full w-full absolute z-0 transition-all duration-200"
                  style={{ strokeOpacity: 0.15 }}
                >
                  <path
                    d="m 0 6 a 6 6 0 0 1 6 -6 h 250.32501220703125 a 16 16 0 0 1 11 5 l 77 77 a 16 16 0 0 1 5 11 v 126 a 6 6 0 0 1 -6 6 h -337.32501220703125 a 6 6 0 0 1 -6 -6 z"
                    fill="#fff"
                  ></path>
                </svg>
                <div className="z-10 absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                  <h3 className="font-mullish font-bold text-deepBlueHead text-xl">
                    Payment Links
                  </h3>
                  <p className="font-mullish text-grayText mt-6">
                    Share payment link via an email, SMS, messenger, chatbot, etc. and get paid immediately.
                  </p>
                  <div className="flex items-center cursor-pointer group mt-4">
                    <a
                      href="#"
                      className="font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    >
                      Know More
                    </a>
                    <i
                      data-feather="chevron-right"
                      className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    ></i>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>

    {/* <!-- feature section 2--> */}
    <section 
     style={{
        backgroundImage: `url(${featureSec})`, // Dynamically set background image
      }}
    className=" bg-no-repeat bg-cover pb-[500px] mt-14 pt-[12rem] lg:pt-[20rem]">

<div className="w-10/12 max-w-[1080px] mx-auto relative pt-4">

  <h2 className="font-mullish text-center text-2xl md:text-3xl lg:text-4xl leading-tight text-white font-bold">Explore Razorpay Business Banking</h2>
  <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>

  {/* Main feature box */}
  <div className="relative w-full min-h-[440px] flex flex-col items-center lg:items-start justify-center py-10">

    <img src={Xflame1} alt="Flame design" loading="lazy" className="absolute -top-[140px] -left-[140px] w-[150px] md:w-[200px]" />
    <img src={Xflame2} alt="Flame design" loading="lazy" className="absolute top-[150px] -right-[180px] w-[150px] md:w-[200px]" />

    {/* Content box */}
    <div className="relative w-full bg-[#181c2e] p-8 md:p-10 py-12 border border-slate-700 z-20 rounded-md">
      <div className="flex flex-col justify-between items-start gap-8">
        <h3 className="font-mullish text-xl md:text-2xl lg:text-3xl text-white font-bold leading-[1.4] max-w-[600px]">
          Manage your company’s finances with
          <img src={razorpayX} alt="Razorpay X" width="168" height="32" className="inline-block mx-2" />
          <span className="text-greenLight">Business Banking</span>
        </h3>

        <ul className="space-y-4">
          {['Open a fully digital current account', 'Automate payables & compliment payments', 'Simplify and track spends with Corporate cards', 'View financial insights at a glance'].map((item, index) => (
            <li key={index} className="font-mullish text-white flex items-center space-x-2">
              <i className="text-greenLight">&#10004;</i>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col-reverse md:flex-row w-full items-center space-x-4">
          <button className="relative bg-lightBlue flex items-center justify-center md:justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 self-stretch md:w-fit">
            Sign Up
            <div className="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] flex justify-center items-center">
              <svg viewBox="0 0 24 24" focusable="false" className="w-[20px] h-[20px] -skew-x-[20deg]">
                <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
            </div>
          </button>

          <div className="flex items-center cursor-pointer group">
            <a href="#" className="font-mullish font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200">Know More</a>
            <i className="w-5 h-5 text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"></i>
          </div>
        </div>
      </div>

      <img src={businessBanking} alt="Business Banking" className="max-w-[600px] absolute right-0 bottom-0 z-4 hidden md:block lg:block" />
    </div>

    {/* Card box */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 my-14">
      {['Current Account', 'Business Loans', 'Payment Solutions'].map((item, index) => (
        <div key={index} className="relative cursor-pointer featureCard2">
          <img src={currentIcon} alt={`${item} Icon`} className="bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[80] featureCardIcon transition-all duration-200" />
          <svg viewBox="0 0 349.325 225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="stroke-1 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200" style={{ strokeOpacity: 0.8 }}>
            <path d="m 0 6 a 6 6 0 0 1 6 -6 h 250.325 a 16 16 0 0 1 11 5 l 77 77 a 16 16 0 0 1 5 11 v 126 a 6 6 0 0 1 -6 6 h -337.325 a 6 6 0 0 1 -6 -6 z" fill="#181C2E"></path>
          </svg>

          <div className="absolute inset-0 z-[1000] flex flex-col justify-between pl-5 py-6 pr-8 featureCardBox">
            <div>
              <h3 className="font-mullish font-extrabold text-white leading-[1.2] text-[1.375rem]">{item}</h3>
              <p className="font-mullish text-grayText mt-6">
                {item} for fast-growing businesses, supported by the best-in-class technology.
              </p>
            </div>

            <div className="flex items-center cursor-pointer place-items-end">
              <a href="#" className="font-mullish font-bold text-lightBlue500 transition-all duration-200">Know More</a>
              <i className="w-5 h-5 text-lightBlue500 transition-all duration-200"></i>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Demo box */}
    <div className="w-full items-center justify-evenly border border-slate-700 mb-24 gap-y-6 relative rounded-md p-8 hidden md:flex lg:flex-row lg:justify-between lg:items-center">
      <p className="font-mullish text-white text-xl">
        Check out the live demo to learn how RazorpayX works. <span className="font-bold">No sign-up required!</span>
      </p>

      <button className="relative bg-lightBlue flex items-center justify-start text-white py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200">
        Check out the demo
        <div className="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] flex justify-center items-center">
          <svg viewBox="0 0 24 24" focusable="false" className="w-[20px] h-[20px] -skew-x-[20deg]">
            <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
          </svg>
        </div>
      </button>
    </div>
  </div>
</div>
</section>

    </div>
  );
}

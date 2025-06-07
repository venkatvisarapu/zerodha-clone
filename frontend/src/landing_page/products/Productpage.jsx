import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Leftimage from "./Leftimage";
import Rightimage from "./Rightimage";
import Universe from "./Universe";
import Footer from "../Footer";

function Productpage() {
  return (
    <>
      <Hero />
      <Leftimage
        imageurl="zerodha-images/kite.png"
        productname="Kite"
        product_des="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />
      
       <Rightimage
        imageURL="zerodha-images/console.png"
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />

      <Leftimage
        imageurl="zerodha-images/coin.png"
        productname="Coin"
        product_des="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />
      

       <Rightimage
        imageURL="zerodha-images/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />

      <Leftimage
        imageurl="zerodha-images/varsity.png"
        productname="Varsity mobile"
        product_des="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />
      
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      
      <Universe />
    </>
  );
}

export default Productpage;

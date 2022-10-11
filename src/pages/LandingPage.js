import React, { useState, useEffect } from "react";
// component imports
import Link from "../components/Link";
// icon
import { ArrowForwardIosRounded } from "@mui/icons-material";
// images
import M2 from "../assets/LandingPage/M2.jpg";
import MacbookAirAll from "../assets/LandingPage/MacbookAir.png";
import AppleWatchS7 from "../assets/LandingPage/AppleWatchS7.png";
import AppleWatchS7IMG from "../assets/LandingPage/AppleWatchS7IMG.png";
import SCForCollegeLP from "../assets/LandingPage/SCForCollegeLP.png";
// styles
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="donate-support center w-100">
        <img src="https://www.kindpng.com/picc/m/223-2237974_transparent-background-unicef-logo-hd-png-download.png" />
        <Link
          text={"Donate to support families affected by the war in Ukraine"}
          icon={<ArrowForwardIosRounded />}
          link={""}
        />
      </div>
      <div className="New-Products-LP">
        <div className="MacbookAirM2-LP">
          <div>
            <h1>MacBook Air</h1>
            <div className="row-nospace center">
              <h2>Supercharged by </h2>
              <img src={M2} style={{ width: 40 }} />
            </div>
            <div className="row-around">
              <Link
                text={"Learn More"}
                icon={<ArrowForwardIosRounded style={{ marginTop: 5 }} />}
                link={""}
                size={20}
              />
              <Link
                text={"Buy"}
                icon={<ArrowForwardIosRounded style={{ marginTop: 5 }} />}
                link={""}
                size={20}
              />
            </div>
          </div>
          <img src={MacbookAirAll} />
        </div>
        <div className="WatchS7-LP">
          <img src={AppleWatchS7} />
          <h2>It's Our Largest Display Yet.</h2>
          <div className="WatchS7-LP-Links">
            <Link
              text={"Learn More"}
              icon={<ArrowForwardIosRounded style={{ marginTop: 5 }} />}
              link={""}
              size={20}
            />
            <Link
              text={"Buy"}
              icon={<ArrowForwardIosRounded style={{ marginTop: 5 }} />}
              link={""}
              size={20}
            />
          </div>
          <img src={AppleWatchS7IMG} />
        </div>
        <div className="SCForCollege-LP">
          <h1 style={{ fontSize: 60 }}>
            <em>
              Get <strong style={{ color: "#CA2166" }}>supercharged</strong> for
              college.
            </em>
          </h1>
          <h2>Save on Mac or iPad. Plus get a gift card up to $150. </h2>
          <div className="center" style={{ marginLeft: "46%" }}>
            <Link
              text={"Shop Now"}
              icon={<ArrowForwardIosRounded style={{ marginTop: 5 }} />}
              link={""}
              size={20}
            />
          </div>
          <img src={SCForCollegeLP} style={{ marginTop: 20 }} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

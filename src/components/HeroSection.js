import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  hasLink,
  link,
  isPurple,
}) {
  return (
    <>
      <div
        className={
          isPurple
            ? "home__hero-section purple"
            : lightBg
            ? "home__hero-section light"
            : "home__hero-section dark"
        }
      >
        {" "}
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div
                  className={
                    lightText ? "yellow-text top-line" : "top-line pink-text"
                  }
                >
                  {topLine}
                </div>
                <h1
                  className={
                    lightText ? "yellow-text heading" : "heading pink-text"
                  }
                >
                  {headline}
                </h1>
                <p className="home__hero-subtitle ">{description}</p>
                {hasLink ? (
                  <Link to={link} rel="noopener noreferrer">
                    <Button
                      buttonSize="btn--wide"
                      buttonColor={lightBg ? "primary" : "white"}
                    >
                      {buttonLabel}
                    </Button>
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default HeroSection;

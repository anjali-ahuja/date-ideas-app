import React from "react";
import "./Footer.css";

import { Button } from "./Button";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaKaggle,
} from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <MdFingerprint className="navbar-icon" />
              Date Ideas
            </Link>
          </div>
          <small className="website-rights">Date Ideas App 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="//www.linkedin.com/in/anjali-manoj-ahuja/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="social-icon-link"
              to="//github.com/anjali-ahuja"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>

            <Link
              className="social-icon-link"
              to="//www.hackerrank.com/anjali_manoj_ah1"
              aria-label="Hackerrank"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaHackerrank />
            </Link>
            <Link
              className="social-icon-link"
              to="//www.kaggle.com/anjiml"
              aria-label="Kaggle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaKaggle />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

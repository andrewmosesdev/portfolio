import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import IconTree from "./IconTree";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner-container">
        <section className="built-by-section">
          <span>
            Built with &#10084;&#65039; by{" "}
            <a
              href="https://www.andrewmoses.dev"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my developer page"
            >
              {" "}
              andrewmosesdev
            </a>
          </span>
        </section>
      </div>
    </footer>
  );
}

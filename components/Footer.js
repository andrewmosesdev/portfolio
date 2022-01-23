import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import IconTree from "./IconTree";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner-container">
        <section className="links-section">
          <h4>External Links</h4>
          <div className="footer-contact-links">
            <div>
              <a
                href="https://twitter.com/amwriteswords"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to my github page"
              >
                <h3>
                  <FaTwitter id="icon" />
                </h3>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/andrewjmoses/"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to my linkedin page"
              >
                <h3>
                  <FaLinkedin id="icon" />
                </h3>
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/amwriteswords/"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to my instagram page"
              >
                <h3>
                  <FaInstagram id="icon" />
                </h3>
              </a>
            </div>
            <div>
              <a
                href="mailto:andrewmosesdrive@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to email me directly"
              >
                <h3>
                  <FaEnvelope id="icon" />
                </h3>
              </a>
            </div>
          </div>
        </section>
        <section className="built-with-section">
          <h4>Built with:</h4>
          <IconTree />
          <h5>
            Need a website?{" "}
            <a
              href="mailto:andrewmosesdrive@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to email me directly"
            >
              {" "}
              Let&apos;s talk.
            </a>
          </h5>
        </section>
      </div>
    </footer>
  );
}

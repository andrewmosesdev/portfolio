import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaAmazon,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner-container">
        <h4>External Links</h4>
        <div className="footer-contact-links">
          <div>
            <a
              href="https://github.com/andrewmosesdrive"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my github page"
            >
              <h3>
                <FaGithub id="icon" />
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
              href="https://www.amazon.com/Sadder-Songs-Andrew-Moses/dp/B08X6DRP4N/ref=sr_1_1?dchild=1&keywords=sadder+songs&qid=1617484950&sr=8-1"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my amazon product page"
            >
              <h3>
                <FaAmazon id="icon" />
              </h3>
            </a>
          </div>
          <div>
            <a
              href="mailto:andrewmosesdrive@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my amazon product page"
            >
              <h3>
                <FaEnvelope id="icon" />
              </h3>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

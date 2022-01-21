import React from "react";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <div>
        <p>
          Interested in reaching out? If it&apos;s regarding my writing or any
          sort of collaboration, send me an email, or message via Instagram. If
          it&apos;s related to anything else, there are more links below.
        </p>
        <div className="contact-section-links">
          <a
            href="mailto:andrewmosesdrive@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to email me directly"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/amwriteswords/"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to my instagram page"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import conversationsPic from "./assets/conversationsPic.jpg";
import { FaAmazon } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="hero-section">
      <h2>
        Featured: <i>Conversations with Myself</i>
      </h2>
      <div>
        <Image
          priority
          src={conversationsPic}
          alt={"A man sitting alone on a front porch"}
          width={800}
          height={480}
        />
        <div>
          <div>
            <a
              href="https://www.amazon.com/dp/B09QNZWP75"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my amazon product page"
            >
              <h3>Available on Amazon</h3>
              <h3>
                <FaAmazon id="hero-icon" />
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

import React from "react";
import Image from "next/image";
import featuredPic from '../assets/conversationsPic.jpg'
import { FaAmazon } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="hero-section">
      <h2>
        Featured: <i>Conversations with Myself</i>
      </h2>
      <div>
        <Image
          src={featuredPic}
          alt={"A man sitting alone on a front porch"}
          width={800}
          height={480}
        />
        <div>
          <div>
            <a
              href="https://www.amazon.com/Sadder-Songs-Andrew-Moses/dp/B08X6DRP4N/ref=sr_1_1?dchild=1&keywords=sadder+songs&qid=1617484950&sr=8-1"
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

import React from "react";
import Image from "next/image";
import igPic from "./assets/gravity.png";

export default function IgSection() {
  return (
    <section className="ig-section">
      <h2>From Instagram</h2>
      <div>
        <h3>
          <i>gravity</i>
        </h3>
        <a
          href="https://www.instagram.com/p/CY19qkOP0PB/"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to my instagram page"
        >
          <Image
            placeholder={"blur"}
            src={igPic}
            alt={"Typed words which read: "}
            width={200}
            height={260}
          />
        </a>
      </div>
    </section>
  );
}

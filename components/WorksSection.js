import React from "react";
import sadderSongs from "../assets/sadderSongsImg.png";
import Image from "next/image";

export default function WorksSection() {
  return (
    <section className="works-section">
      <h2>Works</h2>
      <div className="book-links">
        <a href={"www.amazon.com"}>
          <Image
            src={sadderSongs}
            alt={"A post from Instagram"}
            width={200}
            height={300}
          />
          <h4>Conversations with Myself</h4>
        </a>
        <a href={"www.amazon.com"}>
          <Image
            src={sadderSongs}
            alt={"A post from Instagram"}
            width={200}
            height={300}
          />
          <h4>Sadder Songs</h4>
        </a>
        <a href={"www.amazon.com"}>
          <Image
            src={sadderSongs}
            alt={"A post from Instagram"}
            width={200}
            height={300}
          />
          <h4>All the Things I Never had the Guts to Say</h4>
        </a>
      </div>
    </section>
  );
}

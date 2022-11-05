import React from "react";
import sadderSongs from "./assets/sadderSongsImg.png";
import conversations from "./assets/conversationsImg.png";
import allTheThingsImg from "./assets/allTheThingsImg.png";
import Image from "next/image";
import { CgScrollV } from "react-icons/cg"

export default function WorksSection() {
  return (
    <section className="works-section">
      <h2>Works</h2>
      <CgScrollV />
      <div className="book-links">
        <a
          href={"https://www.amazon.com/dp/B09QNZWP75"}
          target={"_blank"}
          rel="noreferrer"
        >
          <Image
            priority
            placeholder={"blur"}
            src={conversations}
            alt={"Conversations with Myself book cover"}
            width={200}
            height={300}
          />
          <h3>Conversations with Myself</h3>
        </a>
        <a
          href={
            "https://www.amazon.com/Sadder-Songs-Andrew-Moses/dp/B08X6DRP4N"
          }
          target={"_blank"}
          rel="noreferrer"
        >
          <Image
            priority
            src={sadderSongs}
            alt={"Sadder Songs book cover"}
            width={200}
            height={300}
          />
          <h3>Sadder Songs</h3>
        </a>
        <a
          href={
            "https://www.amazon.com/All-Things-Never-Had-Guts/dp/B0857B6R9K"
          }
          target={"_blank"}
          rel="noreferrer"
        >
          <Image
            priority
            src={allTheThingsImg}
            alt={"All the Things I Never had the Guts to Say book cover"}
            width={200}
            height={300}
          />
          <h3>All the Things I Never had the Guts to Say</h3>
        </a>
      </div>
    </section>
  );
}

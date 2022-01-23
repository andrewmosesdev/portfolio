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
            placeholder={"blur"}
            src={conversations}
            alt={"Conversations with Myself book cover"}
            width={200}
            height={300}
          />
          <h4>Conversations with Myself</h4>
        </a>
        <a
          href={
            "https://www.amazon.com/Sadder-Songs-Andrew-Moses/dp/B08X6DRP4N"
          }
          target={"_blank"}
          rel="noreferrer"
        >
          <Image
            src={sadderSongs}
            alt={"Sadder Songs book cover"}
            width={200}
            height={300}
          />
          <h4>Sadder Songs</h4>
        </a>
        <a
          href={
            "https://www.amazon.com/All-Things-Never-Had-Guts/dp/B0857B6R9K"
          }
          target={"_blank"}
          rel="noreferrer"
        >
          <Image
            src={allTheThingsImg}
            alt={"All the Things I Never had the Guts to Say book cover"}
            width={200}
            height={300}
          />
          <h4>All the Things I Never had the Guts to Say</h4>
        </a>
      </div>
    </section>
  );
}

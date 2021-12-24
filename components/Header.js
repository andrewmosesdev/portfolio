/* eslint-disable @next/next/link-passhref */
import React from "react";
import Link from "next/link";

export default function Header({ pageType }) {
  return (
    <header>
      <div className="header-inner-container">
        <h3>Andrew Moses</h3>
        {pageType === "dev" ? (
          <div className="header-links">
            <Link href={"/writing"}>
              <h3>{"Writing"}</h3>
            </Link> 
            <Link href={"/"}>
              <h3>{"Home"}</h3>
            </Link>
          </div>
        ) : pageType === "writing" ? (
          <div className="header-links">
            <Link href={"/dev"}>
              <h3>{"Dev"}</h3>
            </Link>
            <Link href={"/"}>
              <h3>{"Home"}</h3>
            </Link>
          </div>
        ) : pageType === "home" ? (
          <div className="header-links">
            <Link href={"/dev"}>
              <h3>{"Dev"}</h3>
            </Link>
            <Link href={"/writing"}>
              <h3>{"Writing"}</h3>
            </Link>
          </div>) : null}
      </div>
    </header>
  );
}

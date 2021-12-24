import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

export default function Dev() {
  return (
    <div id="main-container" className="main-container">
      <Head>
        <Head>
          <title>AM: Dev</title>
          <meta name="description" content="Writing page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Head>
      <Header pageType={"dev"} />
      <MainContent>
        <h1 className="page-title">Web/Software Development</h1>
        <section className="dev-section"></section>
      </MainContent>
      <Footer />
    </div>
  );
}

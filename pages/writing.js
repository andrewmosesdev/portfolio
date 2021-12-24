import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

export default function Writing() {
  return (
    <div id="main-container" className="main-container">
      <Head>
        <Head>
          <title>AM: Writing</title>
          <meta name="description" content="Writing page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Head>
      <Header pageType={"writing"} />
      <MainContent>
        <h1 className="page-title">Writing</h1>
        <section className="writing-section"></section>
      </MainContent>
      <Footer />
    </div>
  );
}

import Head from "next/head";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import WorksSection from "../components/WorksSection";
import IgSection from "../components/IgSection";

export default function Home() {
  return (
    <div id="main-container" className="main-container">
      <Head>
        <title>amwriteswords</title>
        <meta name="description" content="Home page and navigation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header pageType={"home"} />
      <MainContent>
        <HeroSection />
        <WorksSection />
        <div className="split-section">
          <IgSection />
          <ContactSection />
        </div>
      </MainContent>
      <Footer />
    </div>
  );
}

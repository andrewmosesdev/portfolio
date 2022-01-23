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
        <meta property="og:title" content="amwriteswords" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.amwriteswords.net" />
        <meta
          property="og:image"
          content="https://www.amwriteswords.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FconversationsPic.5b673628.jpg&w=1920&q=75"
        />
        <meta name="description" content="Home page for Andrew Moses, author" />
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

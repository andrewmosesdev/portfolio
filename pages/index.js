import Head from "next/head";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div id="main-container" className="main-container">
      <Head>
        <title>AM: Home</title>
        <meta name="description" content="Home page and navigation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header pageType={"home"} />
      <MainContent>
        <h1 className="page-title">Home</h1>
        <section className="home-navigation-section">
          <h2>Navigation</h2>
          <div>
            <div className="home-dev-nav-container">
              <h3>Development</h3>
              <p>
                lorem ipsum blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah
              </p>
            </div>
            <div className="home-writing-nav-container">
              <h3>Writing</h3>
              <p>
                lorem ipsum blah blah blah blah blah blah blah blah blah blah
                blah blah blah blah blah blah blah blah blah blah blah
              </p>
            </div>
          </div>
        </section>
        <section className="home-about-section">
          <h2>About</h2>
          <div>
            <p>
              lorem ipsum aljdsh lakj sdkv hlajv hlvd havj lsd hav ljsdv lajd
              snva lsbdv jkla bds kl vba jks dbvla sdbv lasbd vlka js db vlka
              jsd bvlk balvs djkv bal jsd b vlka jbsdj kvb akj sdlbvajbs djk
              vbalj kdsb vjakbs dlvbas d;vjan sdjlkgf hsdkjfl gndsvlj asdflv
              ajndsf kjvnasl dfjhag lsdkjh vnal;j ksdnvl ajsdha glj;kd sn;v jaj
              sdl fjhaj vkd hfa jkvh alj kvdfs hlvk ajnsdh flga jhds jk;ag
              hdskjfl vhald uhiag fusdh gual sdhfk vbnjd fklb avjd skf ;agh
              dsfla ugh glj kdfsh lorem ipsum aljdsh lakj sdkv hlajv hlvd havj
              lsd hav ljsdv lajd snva lsbdv jkla bds kl vba jks dbvla sdbv lasbd
              vlka js db vlka jsd bvlk balvs djkv bal jsd b vlka jbsdj kvb akj
              sdlbvajbs djk vbalj kdsb vjakbs dlvbas d;vjan sdjlkgf hsdkjfl
              gndsvlj asdflv ajndsf kjvnasl dfjhag lsdkjh vnal;j ksdnvl ajsdha
              glj;kd sn;v jaj sdl fjhaj vkd hfa jkvh alj kvdfs hlvk ajnsdh flga
              jhds jk;ag hdskjfl vhald uhiag fusdh gual sdhfk vbnjd fklb avjd
              skf ;agh dsfla ugh glj kdfsh
            </p>
          </div>
        </section>
      </MainContent>
      <Footer />
    </div>
  );
}

import React from "react";
import About from "../components/home/about";
import Banner from "../components/home/banner";
import Carteira from "../components/home/carteira";
import Diferenciais from "../components/home/diferenciais";
import Footer from "../components/global/footer";
import Header from "../components/global/header";
import Slider from "../components/home/slider";
import Vitrine from "../components/home/vitrine";


function Home() {
  
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Vitrine />
        <About />
        <Diferenciais />
        <Carteira />
        <Slider />
      </main>
      <Footer />
    </>
  );
}

export default Home;

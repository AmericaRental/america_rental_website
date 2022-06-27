import React from "react";
import About from "../components/about";
import Banner from "../components/banner";
import Carteira from "../components/carteira";
import Diferenciais from "../components/diferenciais";
import Footer from "../components/footer";
import Header from "../components/header";
import Vitrine from "../components/vitrine";


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
      </main>
      <Footer />
    </>
  );
}

export default Home;

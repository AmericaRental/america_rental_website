import React from "react";
import styled from "styled-components";
import About from "../components/about";
import Banner from "../components/banner";
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
      </main>
    </>
  );
}

export default Home;

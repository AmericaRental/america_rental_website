import React from "react";
import Product from "../../components/global/product";
import WhatsappButton from "../../components/global/whatsapp_button";

import banner from "../../images/pia/banner.svg";
import cabine1 from "../../images/quimicos/extra_luxo/cabine1.svg";
import slide1 from "../../images/quimicos/extra_luxo/slide1.svg";
import slide2 from "../../images/quimicos/extra_luxo/slide2.svg";
import slide3 from "../../images/quimicos/extra_luxo/slide3.svg";
import slide4 from "../../images/quimicos/extra_luxo/slide4.svg";
import slide5 from "../../images/quimicos/extra_luxo/slide5.svg";

function ExtraLuxo() {
  const slide = [slide1, slide2, slide3, slide4,slide5];

  return (
    <>
      <WhatsappButton />
      <Product
        banner={[banner]}
        prodImg={cabine1}
        type={"Cabine de banheiro químico"}
        name={"Modelo Extra Luxo"}
        description={[
          "As cabines de ",
          <strong>modelo Extra Luxo</strong>,
          "são as mais completas.",
          <br />,
          <br />,
          "Possuem um ",
          <strong>sistema de descarga,</strong>,
          " impedindo a visualização dos dejetos no interior do tanque e ",
          <strong>pia para lavar as mãos</strong>,
        ]}
        imgs={slide}
        specs={[
          "Caixa de dejetos com descarga, impedindo a visualização do interior",
          "Pia para lavar as mãos",
          "Mictório",
          "Suporte para papel Higiênico, Papel toalha e Sabonete",
          "Cobertura translúcida para luz externa",
          "Trinco indicador Ocupado e livre",
          "Ventilaçao interna por telas",
          "Piso Antiderrapante",
          "Identificação Masculino e Feminino",
        ]}
        prodDimension='A 2,24m X L 1,22m X P 1,16m'
        prodWeight='74kg'
      />
    </>
  );
}

export default ExtraLuxo;

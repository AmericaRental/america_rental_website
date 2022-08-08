import React from "react";
import Product from "../components/global/product";
import WhatsappButton from "../components/global/whatsapp_button";
import banner from "../images/pia/banner.svg";

import MIC from '../images/quimicos/kros/MIC.png';
import img1 from '../images/quimicos/kros/Mictorio1-1.jpg';
import img2 from '../images/quimicos/kros/Mictorio2.jpg';
function Kros() {
  return (
    <>
      <WhatsappButton />

      <Product
        banner={[banner]}
        prodImg={MIC}
        type="Modelos Portáteis"
        name="Mictório Kros"
        description={[
          "Os mictórios são ",
          <strong>ideais para eventos de grande porte</strong>,
          " com um grande fluxo de pessoas.",
          <br />,
          <br />,
          "Por ter um uso mais rápido e capacidade de até 4 usuários por vez, ",
          <strong>auxilia na diminuição da fila do banheiro.</strong>,
        ]}
        imgs={[img1, img2]}
        specs={[
          "Cada torre possui 4 mictórios",
          "Caixa de dejetos com capacidade de até 450L",
          'Pode ser facilmente ligado a rede de esgoto',
          'Piso antiderrapante',
          'Economia de espaço',
          'Diminuição da fila do banheiro'
        ]}
        prodDimension={"A 2,00m X L 1,15m X P 1,15m"}
        prodWeight={"85kg"}
      />
    </>
  );
}

export default Kros;

import React from "react";
import Product from "../../components/global/product";

import img1 from "../../images/quimicos/pne/1.png";
import img2 from "../../images/quimicos/pne/2.jpg";
import img3 from "../../images/quimicos/pne/3.jpg";
import img4 from "../../images/quimicos/pne/4.jpg";

import banner from "../../images/pia/banner.svg";
import WhatsappButton from "../../components/global/whatsapp_button";

function PNE() {
  return (
    <>
      <WhatsappButton />

      <Product
        banner={[banner]}
        prodImg={img1}
        type="Cabines de banheiro químico"
        name="Modelo PNE"
        description={[
          "As cabines de ",
          <strong>modelo PNE (Portadores de Necessidades Especiais)</strong>,
          " são ideais para eventos e obras inclusivas",
          <br />,
          <br />,
          "A ",
          <strong>quantidade de limpezas</strong>,
          " é determinada pela ",
          <strong>quantidade médida de usuários</strong>,
          ", sendo o programa mínimo composto por 1 limpeza por semana, não podendo ser menos pois esta é a validade do produto químico usado.",
          <br />,
          <br />,
          "Na ",
          <strong>manutenção</strong>,
          " é realizada a reposição dos insumos, sucção do tanque e a limpeza interna da cabine.",
        ]}
        imgs={[img2, img3, img4]}
        specs={[
          "Caixa de dejetos com assento",
          "Piso rebaixado com mini rampa para cadeira de rodas",
          "Suporte de papel higiênico",
          "Corrimão interno de apoio ",
          "Cobertura translucida para aproveitamento de luz externa",
          "Tubo respiratório",
          "Trinco indicador Ocupado e Livre",
          "Ventilação interna por telas",
          "Piso antiderrapante",
          "Identificação Masculino e Feminino",
        ]}
        prodDimension={"A 2,35m X L 1,10m X P 1,80m"}
        prodWeight={"102kg"}
      />
    </>
  );
}

export default PNE;

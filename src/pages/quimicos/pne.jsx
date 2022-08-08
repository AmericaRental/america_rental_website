import React from "react";
import Product from "../../components/global/product";

import img1 from "../../images/pne/1.png";
import img2 from "../../images/pne/2.jpg";
import img3 from "../../images/pne/3.jpg";
import img4 from "../../images/pne/4.jpg";

function PNE() {
  return (
    <Product
      prodType="Modelos Portáteis"
      prodName="Pia Portátil"
      description={[
        "As cabines de ",
        <strong>modelo PNE (Portadores de necessidades Especiais)</strong>,
        "são ideais para eventos e obras inclusivas.",
        <br />,
        <br />,
        "A ",
        <strong>quantidade de limpezas</strong>,
        " é determinada pela ",
        <strong>quantidade média de usuários</strong>,
        ", sendo o programa mínimo composto por 1 limpeza por semana, não podendo ser menos pois esta é a validade do produto químico usado.",
        <br />,
        <br />,
        "Na ",
        <strong>manutenção</strong>,
        " é realizada a reposição dos insumos, sucção do tanque e a limpeza e lavagem interna da cabine.",
      ]}
      prodImg={img1}
      descProd={"modelo pne"}
      slideImgs={[img2, img3, img4]}
      slideAlt="PNE"
      specs={[
        "Caixa de dejetos com assento",
        "Piso rebaixado com mini rampa para cadeira de ordas",
        "Suporte para papel Higiênico",
        "Corrimão interno de apoio",
        "Cobertura Translucida para aproveitamento de luz externa",
        "Tubo Respiratório",
        "Trinco indicador Ocupado e Livre",
        "Ventilação interna por telas",
        "Piso antiderrapante",
        "Identificação Masculino e Feminino",
      ]}
      dimensoes="A 2,35m X L 1,10m X P 1,80m"
      peso="102kg"
    />
  );
}

export default PNE;

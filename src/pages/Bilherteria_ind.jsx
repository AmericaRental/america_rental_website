import React from "react";
import Product from "../components/global/product";

import img1 from "../images/pne/1.png";
import img2 from "../images/pne/2.jpg";
import img3 from "../images/pne/3.jpg";
import img4 from "../images/pne/4.jpg";

function BilherteriaInd() {
  return (
    <Product
      prodType="Modelos Portáteis"
      prodName="GUARITAS / BILHETERIAS"
      description={[
        "A guarita/bilheteria é ",
        <strong>térmica e confeccionada em fibra de vidro</strong>,
        <br />,
        <br />,
        "Possuem estrutura reforçada, pintura em resina pigmentada (get coat), balcão interno em fibra de vidro reforçada e piso com borracha antiderrapante, entre outras aracterísticas especificadas de cada cabine.",
        <br />,
        <br />,
        "Se destacam pela ",
        <strong>praticidade</strong>,
        " e abriga os funcionários de maneira ",
        <strong>extremamente confortável.</strong>,
        <br />,
        <br />,
        "Possuímos o equipamento ideal para sua obra, evento ou necessidade, confira os modelos disponíveis.",
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

export default BilherteriaInd;

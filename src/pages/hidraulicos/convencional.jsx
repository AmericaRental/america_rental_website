import React from "react";
import Product from "../../components/global/product";

import banner from "../../images/pia/banner.svg";
import img1 from "../../images/hidraulicos/convencional/c.png";
import img2 from "../../images/hidraulicos/convencional/Hidraulico1-1.jpg";
import img3 from "../../images/hidraulicos/convencional/Hidraulico2.jpg";
import img4 from "../../images/hidraulicos/convencional/Hidraulico3.jpg";
import img5 from "../../images/hidraulicos/convencional/Hidraulico4.jpg";
import WhatsappButton from "../../components/global/whatsapp_button";

export default function Convencional() {
  const slide = [img2, img3, img4, img5];

  return (
    <>
      <WhatsappButton />
      <Product
        banner={[banner]}
        type={"Cabines Portáteis"}
        name="Modelo Hidráulico"
        prodImg={img1}
        description={[
          "O Banheiro Portátil Hidráulico é a ",
          <strong>solução mais econômica</strong>,
          ", por não depender de manutenções para o seu funcionamento.",
          <br />,
          <br />,
          "Mais parecidos com os banheiros convencionais, ",
          <strong>
            possui vaso sanitário de louça e pia para lavar as mãos.
          </strong>,
          <br />,
          <br />,
          "A instalação é simples, agendando uma visita técnica é verificada a possibilidade de implantação do equipamento, após a constatação positiva, o cliente providencia a instalação, não sendo um serviço oferecido pela",
          <strong>América Rental.</strong>,
        ]}
        imgs={slide}
        specs={[
          "Fácil ligamento com a rede hidráulica",
          "Vaso Sanitário de louça",
          "Pia para lavar as mãos",
          "Suporte para papel higiênico",
          "Cobertura Trânslucida para aproveitamento de luz externa",
          "Cobertura com canaletas para impedir a entrada de chuva",
          "Trinco indicador de Ocupado e Livre",
          "Ventilação interna por telas",
          "Piso antiderrapante",
          "Identifica Masculino e Feminino",
        ]}
        prodDimension={"A 2,24m X L 1,22m X P 1,16m"}
        prodWeight={"75kg"}
      />
    </>
  );
}

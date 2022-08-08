import React from "react";
import Product from "../../components/global/product";

import WhatsappButton from "../../components/global/whatsapp_button";

import banner from "../../images/pia/banner.svg";
import cabine1 from "../../images/quimicos/extra_luxo/cabine1.svg";

import slide1 from "../../images/quimicos/luxo/slide1.svg";
import slide2 from "../../images/quimicos/luxo/slide2.svg";
import slide3 from "../../images/quimicos/luxo/slide3.svg";
import slide4 from "../../images/quimicos/luxo/slide4.svg";

function Luxo() {
  return (
    <>
      <WhatsappButton />
      <Product
        banner={[banner]}
        prodImg={cabine1}
        type={"cabines de banheiro químico"}
        name={"Modelo Luxo"}
        description={[
          "As cabines de ",
          <strong>modelo Luxo</strong>,
          " possuem um",
          <strong>sistema de descarga,</strong>,
          " impedindo a visualização dos dejetos no interior do tanque.",
          <br />,
          <br />,
          "A ",
          <strong>quantidade de limpezas</strong>,
          " é determinada pela,",
          <strong>quantidade média de usuários,</strong>,
          " sendo o programa mínimo composto por 1 limpeza por semana, não podendo ser menos pois esta é a validade do produto químico usado. ",
          <br />,
          <br />,
          "Na ",
          <strong>manutenção</strong>,
          " é realizada a reposição dos insumos, sucção do tanque e a limpeza e lavagem interna da cabine.",
        ]}
        imgs={[slide1,slide2,slide3,slide4]}
        specs={['Caixa de dejetos com descarga, impedindo a visualização do interior','Mictório','Suporte para papel Higiênico','Cobertura Translúcida para aproveitamento de luz externa','Tubo Respiratório','Trinco indicador Ocupado e Livre','Ventilação interna por telas','Piso Antiderrapante','Identificação Masculino e Feminino']}
        prodDimension={'A 2,24m X L 1,22m X P 1,16m'}
        prodWeight={'74Kg'}
      />
    </>
  );
}

export default Luxo;

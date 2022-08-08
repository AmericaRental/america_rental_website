import React from "react";
import Product from "../../components/global/product";
import WhatsappButton from "../../components/global/whatsapp_button";

import banner from '../../images/pia/banner.svg'
import img1 from "../../images/hidraulicos/convencional/c.png";
import img2 from '../../images/hidraulicos/chuveiro/Chuveiro1-1.jpg';
import img3 from '../../images/hidraulicos/chuveiro/Chuveiro2.jpg';
import img4 from '../../images/hidraulicos/chuveiro/Chuveiro3.jpg';
import img5 from '../../images/hidraulicos/chuveiro/Chuveiro4.jpg';

function Chuveiro() {
  return (
    <>
      <WhatsappButton />
      <Product
        banner={[banner]}
        type="Cabines Portáteis"
        name="Chuveiro Hidráulico"
        prodImg={img1}
        description={[
          "As cabines de chuveiro portátil são ",
          <strong>práticas e convenientes.</strong>,
          <br />,
          <br />,
          "Necessita de ",
          <strong>instalação hidráulica</strong>,
          " para a entrada de água, um local de escoamento de água considerada limpa e instalação de eletricidade para a água quente.",
          <br />,
          <br />,
          "A instalação é simples, agendando uma visita técnica é verificada a possibilidade de implantação de equipamentos, após a constatação positiva, o cliente providencia a instalação, não sendo um serviço oferecido pela a ",
          <strong>América Rental.</strong>]}
        imgs={[img2,img3,img4,img5]}
        specs={['Fácil ligamento com a rede hidráulica','Instalação elétrica simplificada','Ralo para escoamento da água','Suporte para papel higiênico','Cobertura com canaletas para impedir a entrada de chuva','Trinco indicador Ocupado e Livre','Ventilação interna por telas','Piso antiderrapante','Identificação Masculino e Feminino']}
        prodDimension="A 2,24m x L 1,22m x P 1,16m"
        prodWeight="68kg"
      />
    </>
  );
}

export default Chuveiro;

import React from 'react'
import Product from '../components/global/product'
import WhatsappButton from '../components/global/whatsapp_button'
import banner from "../images/pia/banner.svg";
import guarita from '../images/guarita.png'
import individual from '../images/guarita/individual.jpg'
function BilherteriaInd() {
  return (
    <>
      <WhatsappButton />
      <Product 
        banner={[banner]}
        prodImg={guarita}
        type="Modelos Portáteis"
        name="GUARITAS / BILHETERIAS"
        description={[
          "A guarita/bilheteria é ",
          <strong>térmica e confeccionada em fibra de vidro.</strong>,
          <br />,
          <br />,
          "Possuem estrutura reforçada, pintura em resina pigmentada (get coat), balcão interno em fibra de vidro reforçada e piso com borracha antiderrapante, entre outras características especificas de cada cabine.",
          <br />,
          <br />,
          "Se destacam pela ",
          <strong>praticidade</strong>,
          'e abriga os funcionários de maneira ', <strong>extremamente confortável.</strong>,
          <br />,
          <br />,
          'Possuímos o equipamento ideal para sua obra, evento ou necessidade, confira os modelos disponíveis.'
        ]}
        imgs={[individual]}
        specs={[
          "Confeccionada em Fibra de Vidro",
          "Térmica (quente/frio)",
          'Quatro janelas, sendo três fixas e uma guilhotinada ',
          'Piso emborrachado  antiderrapante',
          'Vidros temperados nas quatro faces',
          'Balcão interno em fibra de vidro',
          'Visor na porta balcão',
          'Porta com trinco (sem chaves)'
        ]}
        prodDimension={"A 2,20m X L 1,05m X P 1,05m"}
        prodWeight={"60kg"}
      />
    </>
  )
}

export default BilherteriaInd
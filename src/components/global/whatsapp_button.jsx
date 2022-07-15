import React from "react";
import styled from "styled-components";

import wpp from "../../images/wpp.svg";

const Float = styled.button`
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  position: fixed;
  background-color: transparent;
  text-align: center;
  z-index: 110;
  border: none;
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
  z-index: 110;
  filter: drop-shadow(3px 6px 0.3rem #00000060);
`;

function WhatsappButton() {
  return (
    <>
      <Float
        onClick={() =>
          window.open('https://web.whatsapp.com/send?phone=551124993353&text=Ol%C3%A1%2C%20tudo%20bem%3F%20preciso%20de%20um%20or%C3%A7amento.', '_blank')
        }
      >
        <Img src={wpp} />
      </Float>
    </>
  );
}

export default WhatsappButton;

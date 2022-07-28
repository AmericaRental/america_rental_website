/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  border: ${(props) => props.border};
  border-radius: 14px;
  padding: 0.6rem 1rem;
  transition: 0.5s ease-in-out;
  font-family: "Montserrat";
  outline: none;
  font-size: 1rem;
  margin: 0 10px;
`;

const P = styled.p`
  font-family: "Inter";
  font-size: 1rem;
  margin: 5px 0px 5px 10px;
`;

const Container = styled.article`
  display: flex;
  /* width: ${(props) => props.width}; */
  flex-direction: column;
  flex: 1;
  flex-basis: 50%;
  margin: 10px 0;
`;

function StyledFField(props) {

  return props.type !== "message" ? (
    <Container>
      <P>{props.text}</P>
      <Input
        alt={props.alt}
        inputMode={props.input || "text"}
        border={props.border}
        id={props.id}
        onChange={props.onchange}
      />
    </Container>
  ) : (
    <Container>
      <P>{props.text}</P>

      <textarea />
    </Container>
  );
}

export default StyledFField;

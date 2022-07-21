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
  const [border, setBorder] = useState("2px solid rgba(0, 0, 0, 0.51)");
  const [email, setEmail] = useState("");

  const emailValidator = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,63}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
  );

  const emailValidatorFn = () => {
    console.log(`before -> ${border}`);
    if (!emailValidator.test(email) && email.length > 1) {
      setBorder("2px solid red");
    } else {
      email.length > 1
        ? setBorder("2px solid rgba(0, 0, 0, 1)")
        : setBorder("2px solid rgba(0, 0, 0, 0.51)");
    }
    console.log(`length -> ${email.length}`);
    console.log(`after -> ${border}`);
  };

  return props.type !== "message" ? (
    <Container>
      <P>{props.text}</P>
      <Input
        alt={props.alt}
        inputMode={props.input || "text"}
        border={border}
        onChange={(e) => {
          if (props.input === "email") {
            setEmail(e.target.value);
            emailValidatorFn();
          }
        }}
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

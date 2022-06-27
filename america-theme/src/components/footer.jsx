import React, { Component } from "react";
import styled from "styled-components";

export default class Footer extends Component {
  render() {
    const Footer = styled.footer`
      width: 100%;
      background-color: #143955;
      display: flex;
      flex-direction: row;
    `;

    const Section = styled.section`
      width: calc(100% / 3);
      display: flex;
      flex-direction: column;
    `;

    const H1 = styled.h1`
      font-family: ${(props) => props.family || "Inter"};
      color: white;
    `;

    const Article = styled.article`
      width: 85%;
      height: max-content;
      padding: 10px 20px ;
    `;
    return (
      <Footer>
        <Article>
          <Section>
            <H1>Newsletter</H1>
            <input />
          </Section>
        </Article>
      </Footer>
    );
  }
}

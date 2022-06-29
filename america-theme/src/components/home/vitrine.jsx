import React, { Component } from "react";
import styled from "styled-components";

import standard from "../../images/standard.svg";
import sanitario_hidraulico from '../../images/sanitario_hidraulico.svg';
import chuveiro from '../../images/chuveiro.svg'
import lavatorio from '../../images/lavatorio.svg';
import kros from '../../images/kros.svg';
import guarita from '../../images/guarita.svg';

export default class Vitrine extends Component {
  render() {
    const Vitrine = styled.section`
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      background-color: #fafafa;
      padding: 15px 0;
    `;
    const HR = styled.hr`
      width: 1px;
      height: 90%;
      background-color: #777;
      filter: drop-shadow(0px 0px 3px #7777775e);
    `;
    const Produto = styled.div`
      width: 250px;
      height: 264px;
      filter: grayscale(100%);
      transition: .2s cubic-bezier(0.42, 0, 0.38, 0.99);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:hover {
        filter: grayscale(0%);
        transition: .2s cubic-bezier(0.42, 0, 0.38, 0.99);
      }
    `;
    const ImgProduto = styled.img`
      width: 70%;
      height: auto;
      transition: .2s cubic-bezier(0.42, 0, 0.38, 0.99);
      margin-bottom: 10px;
      ${Produto}:hover & {
        filter: drop-shadow(0px 5px 14px rgba(0, 0, 0, 0.3));
        transform: scale(105%);
        transition: .2s cubic-bezier(0.42, 0, 0.38, 0.99);
      }
    `;
    const Titulo = styled.h1`
      font-size: 1.25rem;
      font-family: "Inter";
      color: #1b4d72;
      margin: 21px 0 15px 0;

      width: fit-content;
    `;
    const SubTitulo = styled.h3`
      font-size: 1rem;
      font-family: "Josefin Sans";
      width: fit-content;
      color: black;
    `;

    return (
      <>
        <Vitrine>
          <Produto>
            <ImgProduto src={standard} alt='Sanitário químico' />
            <Titulo>Sanitário Portátil</Titulo>
            <SubTitulo>Modelo Químico</SubTitulo>
          </Produto>
          <HR />
          <Produto>
            <ImgProduto src={sanitario_hidraulico} alt='Sanitário Portátil'/>
            <Titulo>Sanitário Portátil</Titulo>
            <SubTitulo>Modelo Hidráulico</SubTitulo>
          </Produto>
          <HR />
          <Produto>
            <ImgProduto src={chuveiro} alt='Chuveiro Portátil'/>
            <Titulo>Chuveiro Portátil</Titulo>
            <SubTitulo>Modelo Hidráulico</SubTitulo>
          </Produto>
          <HR />
          <Produto>
            <ImgProduto src={lavatorio} alt='Lavatório para as Mãos'/>
            <Titulo>Lavatório para Mãos</Titulo>
            <SubTitulo>Independente</SubTitulo>
          </Produto>
          <HR />
          <Produto>
            <ImgProduto src={kros} alt='mictório kros'/>
            <Titulo>Mictório Kros</Titulo>
            <SubTitulo>Modelo Químico</SubTitulo>
          </Produto>
          <HR />
          <Produto>
            <ImgProduto src={guarita} alt='Guaritas ou bilheterias'/>
            <Titulo>Guaritas ou Bilheterias</Titulo>
            <SubTitulo>Duplas e Individuais</SubTitulo>
          </Produto>
        </Vitrine>
      </>
    );
  }
}

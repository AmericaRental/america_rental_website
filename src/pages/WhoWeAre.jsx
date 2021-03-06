import React from "react";
import styled from "styled-components";
import Footer from "../components/global/footer";
import Header from "../components/global/header";

import banner from "../images/whoweare_images/banner.svg";
import bubbles from "../images/whoweare_images/bubbles.svg";

import bubble1 from "../images/whoweare_images/bubble1.svg";
import bubble2 from "../images/whoweare_images/bubble2.svg";
import bubble3 from "../images/whoweare_images/bubble3.svg";

import funcionarios from "../images/funcionarios.svg";
import WhatsappButton from "../components/global/whatsapp_button";

const WhoWeAre = () => {
  const Img = styled.img`
    width: ${(props) => props.width || "100%"};
    height: auto;
    z-index: ${(props) => props.zindex || "-1"};
    left: 0;
    top: 120px;
    position: ${(props) => props.position || "absolute"};
    margin: ${(props) => props.margin || "0 0 0 0"};
    filter: ${(props) => props.filter || "none"};
    transition: 0.2s ease-in-out;
    &:hover {
      filter: ${(props) => props.hfilter || "none"};
      transition: 0.2s ease-in-out;
    }
    @media (max-width: 1000px) {
    width: ${(props) => props.mWidth || "100%"};
    };
  `;
  const Banner = styled.div`
    width: 100%;
    position: initial;
    height: 50vh;
    display: flex;
    justify-content: left;
    align-items: center;
    @media (max-width: 1000px) {
      height: 200px;
    }
  `;
  const BannerImg = styled.img`
    width: ${(props) => props.width || "100%"};
    height: auto;
    z-index: ${(props) => props.zindex || "-1"};
    left: 0;
    top: 120px;
    position: ${(props) => props.position || "absolute"};
    margin: ${(props) => props.margin || "0 0 0 0"};
    filter: ${(props) => props.filter || "none"};
    transition: 0.2s ease-in-out;
    &:hover {
      filter: ${(props) => props.hfilter || "none"};
      transition: 0.2s ease-in-out;
    }
    @media (max-width: 1000px){
      height: 200px;
      object-fit: cover;
      top: 90px;
    };
  `;

  const Title = styled.h1`
    font-family: ${(props) => props.family || "Inter"};
    color: ${(props) => props.color || "#fafafa"};
    font-size: ${(props) => props.size || "80px"};
    letter-spacing: 0.03em;
    margin: ${(props) => props.margin || "0 0 0 0"};
    font-weight: ${(props) => props.weight || "400"};
    @media (max-width: 1000px){
      font-size: ${(props) => props.mSize || "80px"};
    }
  `;

  const NossaEmpresa = styled.article`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `;
  const Welcome = styled.p`
    font-size: 1.22rem;
    color: #969696;
    font-family: "Inter";
    font-weight: 600;
    margin: 15px 0px 10px 0;
  `;

  const TitleOurCompany = styled.h1`
    font-size: 2.2rem;
    color: #1e5680;
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    letter-spacing: 0.02em;
  `;

  const P = styled.p`
    width: ${(props) => props.width || "80%"};
    font-family: "Inter";
    font-size: ${(props) => props.size || "1.4rem"};
    letter-spacing: 0.02em;
    line-height: 33.4px;
    margin: ${(props) => props.margin || "0"};
    text-align: justify;
    @media (max-width: 1000px) {
      width: ${(props) => props.mWidth || "80%"};
    }
  `;

  const Section = styled.section`
    width: 100%;
    background-color: ${(props) => props.bgColor || "#f2f2f2"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Div = styled.div`
    width: ${(props) => props.width || "75%"};
    display: flex;
    flex-direction: row;
    margin: ${(props) => props.margin || "0"};
    justify-content: center;
  `;
  return (
    <>
      <Header />
      <main>
        <WhatsappButton />

        <Banner>
          <Title margin="0 0% 0% 5%" mSize='4em' family="Montserrat">
            Quem Somos
          </Title>
          <BannerImg src={banner} alt="banner" />
        </Banner>
        <NossaEmpresa>
          <Welcome>SEJA MUITO BEM VINDO</Welcome>
          <TitleOurCompany>SOBRE NOSSA EMPRESA</TitleOurCompany>
          <P mWidth='100%'>
            A <strong>Am??rica Rental</strong> ?? hoje reconhecida como a
            principal empresa atuante no ramo de loca????o de{" "}
            <strong>Sanit??rios Port??teis do Estado de S??o Paulo</strong>. <br />
            Fundada em 1999, oferecemos solu????es pr??ticas em{" "}
            <strong>loca????o de equipamentos</strong> para os mais diversos
            segmentos, tendo como atividade principal a loca????o de{" "}
            <strong>Sanit??rios Qu??micos para Obras e Eventos</strong>.
          </P>
          <Img
            src={bubbles}
            alt="eventos"
            width="70%"
            zindex="0"
            position="inherit"
            margin="30px 0"
          />
        </NossaEmpresa>
        <Section>
          <Title
            color="#1e547e"
            size="3rem"
            margin="2.45% 0px 4% 0px"
            weight="700"
            family="Montserrat"
            mSize='4em'
          >
            ESTRUTURA
          </Title>
          <P width="62.5%" margin="0 0 .7% 0" mWidth='83%'>
            Todo o reconhecimento conquistado pela{" "}
            <strong>Am??rica Rental</strong> em todos esses anos de atua????o se
            deve a um <strong>grande investimento</strong> em ??reas importantes
            e especificas, estas nos tornam uma{" "}
            <strong>empresa transparente e capacitada </strong>
            da qual grandes empresas depositam confian??a em nosso trabalho.
            <br />
          </P>
          <P width="62.5%" margin="0 0 .7% 0" mWidth='83%'>
            {" "}
            <strong>SEDE</strong>: A <strong>Am??rica Rental </strong>est??
            localizada em sede pr??pria na cidade de
            <strong> Guarulhos</strong>, um ponto estrat??gico para presta????o de
            servi??os em atendimento de todos os nossos parceiros e clientes,
            podendo atender em raios de at??{" "}
            <strong>500km da cidade de S??o Paulo </strong>.
            <br />
          </P>
          <P width="62.5%" margin="1% 0 .7% 0" mWidth='83%'>
            {" "}
            <strong>EQUIPAMENTOS</strong>: Nossos equipamentos s??o{" "}
            <strong>Modernos e de Primeir??ssima Qualidade</strong>. Possu??mos
            bombas e motores a v??cuo de alto poder de suc????o, grandes tanques
            para armazenamento de dejetos acoplados a ve??culos mantidos sob
            inspe????o e rigoroso controle de manuten????o atendendo todas as{" "}
            <strong>
              normas de seguran??a estaduais e especificas para obras.
            </strong>{" "}
            <br />
          </P>
          <P width="62.5%" margin="0 0 .7% 0" mWidth='83%'>
            <strong>EQUIPE</strong>: Nossos{" "}
            <strong>colaboradores s??o treinados</strong> periodicamente para a
            execu????o de nossos servi??os, possu??mos todos os{" "}
            <strong>
              certificados exigidos e previstos pela legisla????o federal como
              PPRA
            </strong>{" "}
            (Programa de Preven????o de Riscos Ambientais) e{" "}
            <strong>PCMSO</strong> (Programa de Controle M??dico de Sa??de
            Ocupacional).
          </P>

          <Div margin="2% 0 4% 0">
            <Img
              width="320px"
              position="inherit"
              src={bubble1}
              zindex="0"
              margin="0px 3%"
              mWidth= "33%"
            />
            <Img
              width="320px"
              position="inherit"
              src={bubble2}
              zindex="0"
              margin="0px 3%"
              mWidth= "33%"
            />
            <Img
              width="320px"
              position="inherit"
              src={bubble3}
              zindex="0"
              margin="0px 3%"
              mWidth= "33%"
            />
          </Div>
        </Section>
        <Section bgColor="#FEFEFE">
          <Title
            size="2.75rem"
            color="#1e547e"
            weight="700"
            margin="3% 0 4.55% 0"
            mSize='3.5em'
          >
            SUSTENTABILIDADE
          </Title>
          <P width="65%" size="1.3rem" mWidth='83%'>
            A nossa<strong> pol??tica de conserva????o do meio ambiente </strong> ??
            a sua ??nica forma de garantir a sustentabilidade ambiental de forma
            efetiva e com resultados em m??dio e longo prazo. Ambientalmente
            correto, ap??s a suc????o,{" "}
            <strong>
              os dejetos s??o descartados em uma esta????o de tratamento da Attend
              Ambiental credenciada da SABESP
            </strong>
            . Para tal possu??mos licen??a de opera????o emitida pela{" "}
            <strong>CETESB, CADRI</strong> e cadastro t??cnico federal emitido
            pelo <strong>IBAMA</strong>.
          </P>
          <Img
            src={funcionarios}
            alt="funcionarios da am??rica rental"
            zindex="0"
            position="inherit"
            filter="grayscale(100%)"
            hfilter="grayscale(0%)"
            width="auto"
            margin="4% 0 0px 0"
          />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default WhoWeAre;

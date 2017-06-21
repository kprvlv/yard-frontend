import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import Arrow from "./img/combined-shape.svg";

const MainFooter = styled.footer`
  background-color: #111111;
`;

const Wrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 28px;
`;

const Border = styled.hr`
  border: solid 1px #3e4247;
  margin-left: 0;
  margin-top: 0;
`;

const Title = styled.h4`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  color: #646971;
  margin-top: 16px;
  margin-bottom: 8px;
  line-height: 20px;
  font-family: 'Fira Sans', sans-serif;
`;

const TitleName = styled.h4`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  color: #646971;
  margin-top: 0;
  margin-bottom: 8px;
  line-height: 20px;
  font-family: 'Fira Sans', sans-serif;
`;

const Info = styled.p`
  display: block;
  line-height: 20px;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  margin-top: 8px;
  color: #a9afb6;
  font-family: 'Fira Sans', sans-serif;
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  line-height: 20px;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  color: #ffffff;
  margin-top: 8px;
  font-family: 'Fira Sans', sans-serif;
`;

const LinkAll = styled.a`
  margin-top: 16px;
  display: block;
  text-decoration: none;
  line-height: 20px;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  color: #ffffff;
  font-family: 'Fira Sans', sans-serif;
`;

const ArrowLink = styled.img`
  width: 8.8px;
  height: 8px;
  object-fit: contain;
  background-color: #111111;
  margin-left: 8px;
`;

const Phone = styled.p`
  display: block;
  line-height: 20px;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  margin-top: 16px;
  color: #a9afb6;
  font-family: 'Fira Sans', sans-serif;
`;

const Disclaimer = styled.p`
  margin-top: 96px;
  font-size: 11px;
  font-weight: 300;
  text-align: left;
  line-height: 1.15rem;
  color: #a9afb6;
  font-family: 'Fira Sans', sans-serif;
`;

export default () => {
  return (
    <MainFooter>
      <Wrapper>
        <Grid>
          <Row>
            <Col xs={4}>
              <TitleName>ООО «Ярд»</TitleName>
              <Info>ОГРН 1175074002531</Info>
              <Info>ИНН 5036165365</Info>
              <Phone>+7 (999) 821-14-88</Phone>
            </Col>

            <Col xs={2}>
              <Border />
              <Title>Жилые комплексы</Title>
              <Link href="#">ВТБ Арена Парк</Link>
              <Link href="#">Садовые кварталы</Link>
              <Link href="#">Резиденция Монэ</Link>
              <LinkAll a href="#">
                Все ЖК Москвы<ArrowLink src={Arrow} />
              </LinkAll>
            </Col>

            <Col xs={2}>
              <Border />
              <Title>Компания</Title>
              <Link a href="#">Команда</Link>
              <Link a href="#">О компании</Link>
            </Col>
          </Row>

          <Row>
            <Col xsOffset={4} xs={8}>
              <Disclaimer>
                Любая информация, представленная на данном сайте, носит
                исключительно информационный характер и ни при каких условиях не
                является публичной офертой, определяемой положениями статьи 437
                ГК РФ. © ООО «Ярд», 2017
              </Disclaimer>
            </Col>
          </Row>
        </Grid>
      </Wrapper>
    </MainFooter>
  );
};

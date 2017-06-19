import React, { Component } from "react";
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';
import LinkArrow from './img/combined-shape.svg'

const MainFooter = styled.footer`
  background-color: #111111;
`;

const FooterWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: 28px;
`;

const FooterBorder = styled.hr`
  border: solid 1px #3e4247;
  margin-left: 0;
  margin-top: 0;
`;

const FooterTitle = styled.h4`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  color: #646971;
  margin-top: 16px;
  margin-bottom: 8px;
  line-height: 20px;
`;

const FooterTitleName = styled.h4`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  color: #646971;
  margin-top: 0;
  margin-bottom: 8px;
  line-height: 20px;
`;

const FooterInfo = styled.p`
  display: block;
  line-height: 20px;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  margin-top: 8px;
  color: #a9afb6;
`;

const FooterLink = styled.a`
  display: block;
  text-decoration: none;
  line-height: 20px;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  color: #ffffff;
  margin-top: 8px;
`;

const FooterLinkAll = styled.a`
  margin-top: 16px;
  display: block;
  text-decoration: none;
  line-height: 20px;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  color: #ffffff;
`;

const FooterLinkArrow = styled.img`
  width: 8.8px;
  height: 8px;
  object-fit: contain;
  background-color: #111111;
  margin-left: 8px;
`;

const FooterPhone = styled.p`
  display: block;
  line-height: 20px;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  margin-top: 16px;
  color: #a9afb6;
`;

const FooterDisclaimer = styled.p`
  margin-top: 96px;
  font-size: 11px;
  font-weight: 300;
  text-align: left;
  line-height: 1.15rem;
  color: #a9afb6;
`;

export default () => {
  return (
    <MainFooter>
      <FooterWrapper>
        <Grid>
          <Row>
            <Col xs={4}>
              <FooterTitleName>ООО «Ярд»</FooterTitleName>
              <FooterInfo>ОГРН 1175074002531</FooterInfo>
              <FooterInfo>ИНН 5036165365</FooterInfo>
              <FooterPhone>+7 (999) 821-14-88</FooterPhone>
            </Col>

            <Col xs={2}>
              <FooterBorder />
              <FooterTitle>Жилые комплексы</FooterTitle>
              <FooterLink href="#">ВТБ Арена Парк</FooterLink>
              <FooterLink href="#">Садовые кварталы</FooterLink>
              <FooterLink href="#">Резиденция Монэ</FooterLink>
              <FooterLinkAll a href="#" >Все ЖК Москвы<FooterLinkArrow src={LinkArrow}/></FooterLinkAll>
            </Col>

            <Col xs={2}>
              <FooterBorder />
              <FooterTitle>Компания</FooterTitle>
              <FooterLink a href="#">Команда</FooterLink>
              <FooterLink a href="#">О компании</FooterLink>
            </Col>
          </Row>

          <Row>
            <Col xsOffset={4} xs={8}>
              <FooterDisclaimer>Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017</FooterDisclaimer>
            </Col>
          </Row>
        </Grid>
      </FooterWrapper>
    </MainFooter>
  )
}

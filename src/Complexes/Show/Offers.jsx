import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const OffersBackground = styled.div`
  background-color: #f4f5f9;
  padding-top: 64px;
  padding-bottom: 64px;
`;

const Title = styled.h2`
  margin-right: auto;
  margin-left: auto;
  font-family: "Philosopher";
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
  text-align: left;
  color: #3e4247;
  margin-top: 0;
  margin-bottom: 24px;;
  padding-bottom: 0;
`;

const ListWrapper = styled.div`
  padding: 24px 32px;
  background-color: white;
`;

const ListBlock = styled.div`
  display: block;
  margin-bottom: 25px;
`;

const ListTitle = styled.h3`
  font-family: "Philosopher";
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: #3e4247;
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

const ListBlockTitle = styled.p`
  font-size: 16px;
  color: #a9afb6;
  line-height: 1.38;
  margin-top: 0;
  margin-bottom: 10px;
`;

const ListBlockText = styled.p`
  font-size: 16px;
  color: #3e4247;
  line-height: 1.38;
  padding: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 25px;
`;

const ListButton = styled.button`
  background-color: black;
  color: white;
  border-style: none;
  border-radius: 2px;
  padding: 12px 32px;
  text-align: center;
  line-height: 1;
  font-family: "Fira Sans", sans-serif;
  margin-bottom: 0;
  margin-top: 8px;
`;

export default () => {
  return (
    <OffersBackground>
      <Grid>
        <Row center="lg">
          <Title>Предложения в ЖК «Полянка/44»</Title>
        </Row>
        <Row>
          <Col xs={4}>
            <ListWrapper>
              <ListTitle>1-комнатные квартиры</ListTitle>

              <ListBlock>
                <ListBlockTitle>Площадь:</ListBlockTitle>
                <ListBlockText>от 59 до 120 м²</ListBlockText>
              </ListBlock>
              <ListBlock>
                <ListBlockTitle>Стоимость</ListBlockTitle>
                <ListBlockText>от 20.3 до 84.2 млн руб</ListBlockText>
              </ListBlock>
              <Row center="xs">
                <ListButton>Посмотреть предложения</ListButton>
              </Row>

            </ListWrapper>
          </Col>

          <Col xs={4}>
            <ListWrapper>
              <ListTitle>1-комнатные квартиры</ListTitle>

              <ListBlock>
                <ListBlockTitle>Площадь:</ListBlockTitle>
                <ListBlockText>от 59 до 120 м²</ListBlockText>
              </ListBlock>
              <ListBlock>
                <ListBlockTitle>Стоимость</ListBlockTitle>
                <ListBlockText>от 20.3 до 84.2 млн руб</ListBlockText>
              </ListBlock>
              <Row center="xs">
                <ListButton>Посмотреть предложения</ListButton>
              </Row>

            </ListWrapper>
          </Col>

          <Col xs={4}>
            <ListWrapper>
              <ListTitle>1-комнатные квартиры</ListTitle>

              <ListBlock>
                <ListBlockTitle>Площадь:</ListBlockTitle>
                <ListBlockText>от 59 до 120 м²</ListBlockText>
              </ListBlock>
              <ListBlock>
                <ListBlockTitle>Стоимость</ListBlockTitle>
                <ListBlockText>от 20.3 до 84.2 млн руб</ListBlockText>
              </ListBlock>
              <Row center="xs">
                <ListButton>Посмотреть предложения</ListButton>
              </Row>

            </ListWrapper>
          </Col>
        </Row>
      </Grid>
    </OffersBackground>
  );
};

// @flow

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

const Border = styled.div`
  padding-top: 32px;
  border-top: solid 1px #eaebf0;
`;

const Title = styled.h2`
  font-family: "Philosopher";
  font-size: 24px;
  font-weight: bold;
  line-height: 1.13;
  text-align: left;
  color: #3e4247;
  margin-top: 0;
  margin-bottom: 16px;
  padding-bottom: 0;
`;

const Wrapper = styled.div`
  padding-top: 0;
  padding-bottom: 56px;
`;

const Text = styled.p`
  font-size: 16px;
  text-align: left;
  color: #3e4247;
  margin-bottom: 8px;
  line-height: 1.38;
  margin-top: 0;
`;


export default () => (
  <Border>
    <Title>Инфраструктура</Title>
    <Wrapper>
      <Row>
        <Col xs={2}>
          <Text>Бассейн</Text>
        </Col>

        <Col xs={2}>
          <Text>Детский сад</Text>
        </Col>

        <Col xs={2}>
          <Text>Частная школа</Text>
        </Col>

        <Col xs={2}>
          <Text>Бассейн</Text>
        </Col>

        <Col xs={2}>
          <Text>Детский сад</Text>
        </Col>

        <Col xs={2}>
          <Text>Частная школа</Text>
        </Col>

        <Col xs={2}>
          <Text>Частная школа</Text>
        </Col>

        <Col xs={2}>
          <Text>Частная школа</Text>
        </Col>

        <Col xs={2}>
          <Text>Частная школа</Text>
        </Col>
      </Row>
    </Wrapper>
  </Border>
  );

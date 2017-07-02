// @flow

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

const Wrapper = styled.div`
  margin-bottom: 48px;
  border-top: solid 1px #eaebf0;
`;

const Title = styled.h2`
  display: block;
  font-family: "Philosopher";
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  color: #3e4247;
  margin-right: 48px;
  line-height: 1.13;
  margin-top: 32px;
  margin-bottom: 0.5rem;
  padding-bottom: 0;
`;

const Block = styled.dl`
  display: flex;
  justify-content: space-between;
  font-family: "Fira Sans";
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #3e4247;
  margin-top: 11px;
  margin-bottom: 0;
`;

const BlockTitle = styled.dt`
  font-family: "Fira Sans";
  font-size: 16px;
  text-align: left;
  font-weight: 400;
  line-height: 1.38;
  color: #a9afb6;
  width: 50%;
  margin-top: 0rem;
  margin-bottom: 0;
`;

const BlockText = styled.dd`
  font-family: "Fira Sans";
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #3e4247;
  margin-left: 48px;
  width: 50%;
  line-height: 1.56;
`;

type Props = {
  propertiesCount: number,
};

export default (props: Props) => (
  <Wrapper>
    <Title>Характеристики</Title>
    <Row>
      <Col xs={4}>
        <Block>
          <BlockTitle>Количество квартир:</BlockTitle>
          <BlockText>{props.propertiesCount}</BlockText>
        </Block>
        <Block>
          <BlockTitle>Количество квартир:</BlockTitle>
          <BlockText>{props.propertiesCount}</BlockText>
        </Block>
        <Block>
          <BlockTitle>Количество квартир:</BlockTitle>
          <BlockText>{props.propertiesCount}</BlockText>
        </Block>
      </Col>

      <Col xs={4}>
        <Block>
          <BlockTitle>Количество квартир:</BlockTitle>
          <BlockText>{props.propertiesCount}</BlockText>
        </Block>
        <Block>
          <BlockTitle>Количество квартир:</BlockTitle>
          <BlockText>{props.propertiesCount}</BlockText>
        </Block>
        <Block>
          <BlockTitle>Количество квартир:</BlockTitle>
          <BlockText>{props.propertiesCount}</BlockText>
        </Block>
      </Col>

      <Col xs={4}>
        <Block>
          <BlockTitle>Количество квартир:</BlockTitle>
          <BlockText>{props.propertiesCount}</BlockText>
        </Block>
        <Block>
          <BlockTitle>Количество квартир:</BlockTitle>
          <BlockText>{props.propertiesCount}</BlockText>
        </Block>
        <Block>
          <BlockTitle>Количество квартир:</BlockTitle>
          <BlockText>{props.propertiesCount}</BlockText>
        </Block>
      </Col>
    </Row>
  </Wrapper>
  );

// @flow

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

const Wrapper = styled.div`
  margin-top: -150.5px;
  margin-bottom: 64.5px;
`;

const LocationMap = styled.img`
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 303px;
`;

const Content = styled.div`
  padding: 24px;
  background-color: white;
  border-bottom: solid 1px #e0e0e1;
`;

const Duration = styled.p`
  margin-bottom: 0px;
  margin-top: 8px;
  line-height: 1.38;
  color: #a9afb6;
`;

const Name = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.38;
  font-weight: 500;
  color: #3e4247;
`;

const ContentList = styled.div`
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
`;

export default () => (
  <Wrapper>
    <Row>
      <Col lg={6}>
        <LocationMap: string src={`${process.env.PUBLIC_URL}/img/map.png`} />
      </Col>
      <Col lg={6}>
        <ContentList>
          <Content>
            <Name>Красный октябрь</Name>
            <Duration>24 минуты, 6 км</Duration>
          </Content>
          <Content>
            <Name>World class</Name>
            <Duration>2 минуты, 300 м</Duration>
          </Content>
          <Content>
            <Name>Третьяковская галерея</Name>
            <Duration>14 минуты, 4 км</Duration>
          </Content>
        </ContentList>
      </Col>
    </Row>
  </Wrapper>
  );

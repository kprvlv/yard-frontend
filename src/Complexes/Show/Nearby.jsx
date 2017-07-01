// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Wrapper = styled.div`
  background-color: #3e4247;
  padding-top: 64px;
  padding-bottom: 218px;
`;

const Title = styled.h1`
  font-family: "Philosopher";
  font-size: 24px;
  font-weight: bold;
  line-height: 27px;
  text-align: left;
  color: #a9afb6;
  margin-top: 0;
  margin-bottom: 48px;
  padding-bottom: 0;
`;

const Text = styled.p`
  font-family: 'Philosopher';
  font-size: 48px;
  font-weight: bold;
  line-height: 1.25;
  color: #ffffff;
  margin-bottom: 48px;
`;

const Link = styled.a`
  text-decoration: none;
  font-family: 'Fira Sans';
  font-size: 16px;
  color: #00779a;
`;

const NearbyLink = styled.img`
  width: 8.8px;
  height: 8px;
  object-fit: contain;
  margin-left: 8px;
`;

const NearbyImage = styled.img`
  width: 100%;
  height: 560px;
`;

export default () =>
  (<Wrapper>
    <Grid>
      <Row middle="lg" between="lg">
        <Col lg={6}>
          <Title>Якиманка</Title>
          <Text>Исторический центр Москвы в двух<br /> километрах от Кремля</Text>
          <Link>
            Гид по Якиманке<NearbyLink: string src={`${process.env.PUBLIC_URL}/img/arrow-nearby.svg`} />
          </Link>
        </Col>
        <Col lg={6}>
          <NearbyImage: string src={`${process.env.PUBLIC_URL}/img/polyanka-photo.png`} />
        </Col>
      </Row>
    </Grid>
  </Wrapper>);

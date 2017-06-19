import React, { Component } from "react";
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Description = styled.div`
  text-align: center;
  color: #3e4247;
  margin-bottom: 64px;
`;

const DescriptionTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 2.5rem;
  margin-bottom: 8px;
  margin-top: 0px;
`;

const DescriptionText = styled.p`
  line-height: 1.5rem;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const DescriptionButton = styled.button`
  background-color: #000;
  border: none;
  border-radius: 2px;
  color: #fff;
  font-family: 'Fira Sans', sans-serif;
  padding: 12px 32px;
  margin-top: 16px;
  font-size: 16px;
`;

export default () => {
  return (
    <Description>
      <Grid>
        <Row center="lg">
          <Col lg={8}>
            <DescriptionTitle>Discover Our New Developments</DescriptionTitle>
            <DescriptionText>Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.</DescriptionText>
            <DescriptionButton>Contact The Team</DescriptionButton>
          </Col>
        </Row>
      </Grid>
    </Description>
  )
}

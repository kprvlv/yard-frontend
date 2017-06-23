import React, { Component } from "react";
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Wrapper = styled.div`
  text-align: center;
  color: #3e4247;
  margin-bottom: 64px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 2.5rem;
  margin-bottom: 8px;
  margin-top: 0px;
`;

const Text = styled.p`
  line-height: 1.5rem;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const Button = styled.button`
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
    <Wrapper>
      <Grid>
        <Row center="lg">
          <Col lg={8}>
            <Title>Discover Our New Developments</Title>
            <Text>Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.</Text>
            <Button>Contact The Team</Button>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  )
}

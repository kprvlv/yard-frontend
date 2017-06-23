import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const SummaryHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 16px;
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
  margin-top: 0.5rem;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const Text = styled.small`
  display: block;
  font-family: "Fira Sans", sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  color: #a9afb6;
  line-height: 1.57;
  padding-top: 1rem;
  margin-bottom: 24px;
`;

export default () => {
  return (
    <SummaryHeaderWrapper>
      <Title>
        950
        <Text>предложений</Text>
      </Title>
      <Title>
        John McAslan + Partners
        <Text>архитектор</Text>
      </Title>
      <Title>
        Группа «ПСН»
        <Text>застройщик</Text>
      </Title>
    </SummaryHeaderWrapper>
  );
};

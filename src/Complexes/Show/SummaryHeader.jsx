// @flow

import React from 'react';
import styled from 'styled-components';
import Pluralizer from './Pluralizer';
import type { DetailsType } from './../types';

const Wrapper = styled.div`
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

type Props = {
  units: number,
  details: DetailsType,
};

export default ({ units, details }: Props) =>
  (<Wrapper>
    {units > 0 &&
      <Title>
        {units}
        <Text>
          <Pluralizer numeral={units} one="предложение" few="предложения" other="предложений" />
        </Text>
      </Title>}
    {details.architect &&
      <Title>
        {details.architect}
        <Text>архитектор</Text>
      </Title>}
    {details.developer &&
      <Title>
        {details.developer}
        <Text>застройщик</Text>
      </Title>}
  </Wrapper>);

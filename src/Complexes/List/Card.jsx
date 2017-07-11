// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  display: flex;
  background: #fff;
  text-decoration: none;
  margin-bottom: 48px;

  &:hover {
    box-shadow: 0 0 20px rgba(0,0,0,.3);
  }
`;

const Image = styled.img`
  width: 484px;
  height: 350px;
  flex-shrink: 0;
`;

const Description = styled.div`
  display: block;
  padding-left: 2rem;
  padding-right: 5.375em;
  border-bottom: solid 2px #646971;
`;

const Location = styled.p`
  display: block;
  font-family: monaco, Consolas, 'Lucida Console', monospace;
  font-size: 16px;
  text-align: left;
  color: #646971;
  margin-top: 24px;
  line-height: 1.25;
`;

const Title = styled.h3`
  display: block;
  font-size: 40px;
  font-weight: bold;
  line-height: 1.4;
  text-align: left;
  color: #000000;
  margin-top: 24px;
  margin-bottom: 0;
`;

const Text = styled.p`
  display: block;
  line-height: 1.5;
  text-align: left;
  color: #3e4247;
  margin-top: 8px;
`;

type Props = {
  id: number,
  location: string,
  img: string,
  title: string,
  children: Element;
};

export default ({ id, img, location, title, children }: Props) =>
  (<Card to={`/complex/${id}`}>
    <Image
      src={img}
    />
    <Description>
      <Location>{location}</Location>
      <Title>{title}</Title>
      <Text>{children}</Text>
    </Description>
  </Card>);

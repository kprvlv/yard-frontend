import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

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
  width: 100%;
  height: 350px;
`;

const Description = styled.div`
  display: block;
  padding-left: 16px;
  padding-right: 100px;
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

export default props => {
  return (
    <Card to="/show">
      <Image src={process.env.PUBLIC_URL + "/img/bitmap_" + props.id + ".png"} />
      <Description>
        <Location>{props.location}</Location>
        <Title>{props.title}</Title>
        <Text>
          The Lewis Steel Building is a masterful industrial conversion located
          in the heart of Williamsburg. Located at 76 North 4th Street, the
          former 1930's steel factory has been transformed into 83 individually
          unique and luxury loft apartments.
        </Text>
      </Description>
    </Card>
  );
};

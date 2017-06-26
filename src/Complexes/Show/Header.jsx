import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

const Border = styled.div`
  border-top: solid 1px #eaebf0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  display: block;
`;

const Title = styled.h1`
  font-family: "Philosopher";
  font-size: 32px;
  font-weight: bold;
  text-align: left;
  color: #3e4247;
  line-height: 1;
  margin-top: 24px;
  margin-bottom: 1rem;
`;

const Location = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  line-height: 1.2;
  color: #a9afb6;
  margin-top: 0;
  margin-bottom: 16px;
`;

const Button = styled.button`
  margin-bottom: 52px;
  color: #00779a;
  text-align: left;
  font-size: 10px;
  font-weight: 300;
  line-height: 1;
  padding: 8px 16px;
  border-radius: 2px;
  border: solid 1px #e0e0e1;
  padding: 8px 16px;
  font-family: "Fira Sans", sans-serif;
  margin-top: 24px;
  background-color: white;
`;

export default () =>
  (<Border>
    <Grid>
      <Wrapper>
        <Text>
          <Title>Жилой комплекс «Полянка/44»</Title>
          <Location>
            Район Якиманка, улица Большая Полянка, дом 44 • 119180
          </Location>
        </Text>
        <Button>В избранное</Button>
      </Wrapper>
    </Grid>
  </Border>);

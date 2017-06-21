import React, { Component } from "react";
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.p`
  display: block;
`;

const HeaderTitle = styled.h1`
  font-family: "Philosopher";
  font-size: 32px;
  font-weight: bold;
  text-align: left;
  color: #3e4247;
  line-height: 1;
  margin-top: 24px;
  margin-bottom: 1rem;
`;

const HeaderLocation = styled.p`
  font-family: "Fira Sans", sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  line-height: 1.2;
  color: #a9afb6;
  margin-top: 0;
  margin-bottom: 16px;
`;

const HeaderButton = styled.button`
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

export default () => {
  return (
    <Grid>
      <HeaderWrapper>
        <HeaderText>
          <HeaderTitle>Жилой комплекс «Полянка/44»</HeaderTitle>
          <HeaderLocation>
            Район Якиманка, улица Большая Полянка, дом 44 • 119180
          </HeaderLocation>
        </HeaderText>
        <HeaderButton>В избранное</HeaderButton>
      </HeaderWrapper>
    </Grid>
  );
};

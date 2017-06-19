import React, { Component } from "react";
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import logo from './img/compass-logo.svg';

const MainHeader = styled.header`
  background-color: #fff;
`;

const MainHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainHeaderLogo = styled.img`
  width: 179.1px;
  height: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const MainHeaderNav = styled.nav`
  line-height: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-left: 0
`;

const MainHeaderNavLink = styled.a`
  text-decoration: none;
  color: #3e4247;
  line-height: 16px;
  text-decoration: none;

  :not(:last-child) {
    margin-right: 32px;
  }
`;

export default () => {
  return (
    <MainHeader>
      <Grid>
        <MainHeaderWrapper>
          <MainHeaderLogo src={logo}/>
          <MainHeaderNav>
            <MainHeaderNavLink href="">Купить</MainHeaderNavLink>
            <MainHeaderNavLink href="">Снять</MainHeaderNavLink>
            <MainHeaderNavLink href="">Наши агенты</MainHeaderNavLink>
          </MainHeaderNav>
        </MainHeaderWrapper>
      </Grid>
    </MainHeader>
  )
}

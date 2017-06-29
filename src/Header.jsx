import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import logo from './img/compass-logo.svg';

const Header = styled.header`
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 179.1px;
  height: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  line-height: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-left: 0
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #3e4247;
  line-height: 16px;
  text-decoration: none;
  font-family: 'Fira Sans', sans-serif;

  :not(:last-child) {
    margin-right: 32px;
  }
`;

export default () => (
  <Header>
    <Grid>
      <Wrapper>
        <Logo src={logo} />
        <Nav>
          <NavLink href="">Купить</NavLink>
          <NavLink href="">Снять</NavLink>
          <NavLink href="">Наши агенты</NavLink>
        </Nav>
      </Wrapper>
    </Grid>
  </Header>
  );

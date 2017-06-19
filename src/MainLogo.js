import React, { Component } from "react";
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import DevelopmentLogo from "./img/compass-development-logo.svg";

const MainLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #161616;
  padding-top: 80px;
  padding-bottom: 80px;
  width: auto;
  margin-bottom: 64px;
`;

const CompassDevelopmentLogo = styled.img`
  width: 418.9px;
  height: 131px;
  object-fit: contain;
  max-width: 50%;
`;

export default () => {
  return (
    <MainLogo>
      <CompassDevelopmentLogo src={DevelopmentLogo}/>
    </MainLogo>
  )
}

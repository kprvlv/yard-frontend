import React from 'react';
import styled from 'styled-components';
import developmentLogo from './compass-development-logo.svg';


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

export default () => (
  <MainLogo>
    <CompassDevelopmentLogo src={developmentLogo} />
  </MainLogo>
  );

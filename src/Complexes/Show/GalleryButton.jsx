import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const GalleryButton = styled.button`
  position: absolute;
  border-radius: 2px;
  background-color: #00779a;
  font-family: "Fira Sans";
  font-size: 10px;
  font-weight: 300;
  line-height: 1;
  text-align: left;
  color: #ffffff;
  border-radius: 2px;
  margin-top: -2.625rem;
  padding: 8px 16px;
  border-style: none;
`;

export default () => {
  return (
    <Grid>
      <GalleryButton>41 фотография</GalleryButton>
    </Grid>
  );
};

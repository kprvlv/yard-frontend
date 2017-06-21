import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";


const Slider = styled.div`
  display: flex;
  overflow-x: auto;
`;

const Image = styled.img`
  height: 400px;
  object-fit: contain;
`;

export default () => {
  return (
    <Slider>
      <Image src={process.env.PUBLIC_URL + "img/complex_1.png"} />
      <Image src={process.env.PUBLIC_URL + "img/complex_2.png"} />
      <Image src={process.env.PUBLIC_URL + "img/complex_3.png"} />
      <Image src={process.env.PUBLIC_URL + "img/complex_4.png"} />
      <Image src={process.env.PUBLIC_URL + "img/complex_5.png"} />
    </Slider>
  );
};

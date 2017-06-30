import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

const Slider = styled.div`
  display: flex;
  overflow-x: auto;
`;

const Image = styled.img`
  height: 400px;
  object-fit: contain;
`;

const Button = styled.button`
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

export default () => (
  <div>
    <Slider>
      <Image />)
    </Slider>
    <Grid>
      <Button>41 фотография</Button>
    </Grid>
  </div>
  );

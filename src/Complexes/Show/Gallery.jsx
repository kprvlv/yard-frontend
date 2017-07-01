import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import { getImageUrl } from '../../Utils';

const Slider = styled.div`
  display: flex;
  overflow-x: auto;
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

export default props =>
  (<div>
    <Slider>
      {props.imageIds.map(id =>
        <img key={id} src={getImageUrl(id)} alt="Slider" height="400px" />,
      )}
    </Slider>
    <Grid>
      <Button>41 фотография</Button>
    </Grid>
  </div>);

import React, { Component } from "react";
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Image1 from "./img/bitmap.png";
import Image2 from "./img/bitmap-2.png";
import Image3 from "./img/bitmap-3.png";

const Card = styled.a`
  display: flex;
  background: #fff;
  text-decoration: none;
  margin-bottom: 48px;

  &:hover {
    box-shadow: 0 0 20px rgba(0,0,0,.3);
  }
`;

const CardImage = styled.img`
  width: 484px;
  height: 350px;
`;

const CardDescription = styled.div`
  display: block;
  padding-left: 16px;
  padding-right: 100px;
  border-bottom: solid 2px #646971;
`;

const CardLocation = styled.p`
  display: block;
  font-family: monaco, Consolas, 'Lucida Console', monospace;
  font-size: 16px;
  text-align: left;
  color: #646971;
  margin-top: 24px;
  margin-bottom: 0px;
  line-height: 1.25;
`;

const CardTitle = styled.h3`
  display: block;
  font-size: 40px;
  font-weight: bold;
  line-height: 1.4;
  text-align: left;
  color: #000000;
  margin-top: 24px;
  margin-bottom: 0px;
`;

const CardText = styled.p`
  display: block;
  line-height: 1.5;
  text-align: left;
  color: #3e4247;
  margin-top: 8px;
`;

export default () => {
  return (
    <Cards>
      <Grid>
        <Card>
          <CardImage src={Image1}/>
          <CardDescription>
            <CardLocation>SOUTH BEACH, SAN FRANCISCO</CardLocation>
            <CardTitle>764 Metropolitan Avenue</CardTitle>
            <CardText>The Lewis Steel Building is a masterful industrial conversion located in the heart of Williamsburg. Located at 76 North 4th Street, the former 1930s steel factory has been transformed into 83 individually unique and luxury loft apartments.</CardText>
          </CardDescription>
        </Card>
        <Card>
          <CardImage src={Image2}/>
          <CardDescription>
            <CardLocation>MIDTOWN EAST, MANHATTAN</CardLocation>
            <CardTitle>100 East 53rd Street</CardTitle>
            <CardText>One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattans Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned.</CardText>
          </CardDescription>
        </Card>
        <Card>
          <CardImage src={Image3}/>
          <CardDescription>
            <CardLocation>NOLITA, MANHATTAN</CardLocation>
            <CardTitle>152 Elizabeth</CardTitle>
            <CardText>152 Elizabeth is an ultra-luxury condominium building—the first in New York City designed by Japanese master architect Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets in Nolita, the 32,000-square-foot building will stand as a profound architectural statement and embrace the industrial character of the neighborhood.</CardText>
          </CardDescription>
        </Card>
      </Grid>
    </Cards
  )
}

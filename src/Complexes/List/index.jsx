import React, { Component } from "react";
import DevelopmentLogo from "./compass-development-logo.svg";
import { Grid, Row, Col } from 'react-flexbox-grid';
import BodyClassName from "react-body-classname";
import MainLogo from './MainLogo';
import Description from './Description';
import Card from './Card'

export default () => {
  return (
    <BodyClassName className="complexes">
      <div>
        <MainLogo />
        <Description />
        <Grid>
          <Card
            id={1}
            location="SOUTH BEACH, SAN FRANCISCO"
            title="The Harrison" />
          <Card
            id={2}
            location="MIDTOWN EAST, MANHATTAN"
            title="100 East 53rd Street" />
          <Card
            id={3}
            location="NOLITA, MANHATTAN"
            title="152 Elizabeth" />
        </Grid>
      </div>
    </BodyClassName>
  );
};

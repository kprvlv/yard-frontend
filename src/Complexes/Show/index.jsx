import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import BodyClassName from "react-body-classname";
import Header from "./Header";
import Gallery from "./Gallery"
import GalleryButton from "./GalleryButton"
import SummaryHeader from "./SummaryHeader"
import ComplexFeatures from "./ComplexFeatures"
import ComplexDescription from "./ComplexDescription"
import Infrastructure from "./Infrastructure"
import Offers from "./Offers"
import Nearby from "./Nearby"
import ComplexLocation from "./ComplexLocation"

export default () => {
  return (
    <BodyClassName className="complex">
      <div>
        <Header />
        <Gallery />
        <Grid>
          <GalleryButton />
          <SummaryHeader />
          <ComplexFeatures />
          <ComplexDescription />
          <Infrastructure />
        </Grid>
        <Offers />
        <Grid>
          <Nearby />
          <ComplexLocation />
        </Grid>
      </div>
    </BodyClassName>
  );
};

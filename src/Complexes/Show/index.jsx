import React from 'react';
import { Grid } from 'react-flexbox-grid';
import BodyClassName from 'react-body-classname';
import Header from './Header';
import Gallery from './Gallery';
import SummaryHeader from './SummaryHeader';
import Features from './Features';
import ComplexDescription from './ComplexDescription';
import Infrastructure from './Infrastructure';
import Offers from './Offers';
import Nearby from './Nearby';
import Location from './Location';

export default () =>
  (<BodyClassName className="complex">
    <div>
      <Header />
      <Gallery />
      <Grid>
        <SummaryHeader />
        <Features />
        <ComplexDescription />
        <Infrastructure />
      </Grid>
      <Offers />
      <Nearby />
      <Grid>
        <Location />
      </Grid>
    </div>
  </BodyClassName>);

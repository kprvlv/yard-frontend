// @flow

import React, { Component } from 'react';
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
import Area from './Area';
import { get } from '../../apiUrl';
import type { ComplexType, LocationType } from '../types';

function formatLocation({ subLocalityName, street, house, postalCode }: LocationType): string {
  return [subLocalityName, street, house, postalCode]
    .filter(item => !!item)
    .join(', ');
}

class Show extends Component {
  state = {};

  state: ComplexType;

  componentDidMount() {
    this.load(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps: Object) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.load(nextProps.match.params.id);
    }
  }

  load(id: number) {
    get(`/complexes/${id}`).then(json => this.setState(json));
  }
  complexes: Array<ComplexType>;

  render() {
    const {
      name = '',
      location = {},
      images = [],
      units = 0,
      details = {},
      statistics = {},
      fullDescription = '',
      amenities = [],
    } = this.state;
    return (
      <BodyClassName className="complex">
        <div>
          <Header name={name} location={formatLocation(location)} />
          <Gallery imageIds={images.map(image => image.id)} />
          <Grid>
            <SummaryHeader
              units={units}
              details={details}
              statistics={statistics}
              fullDescription={fullDescription}
              amenities={amenities}
            />
            <Features statistics={statistics} details={details} />
            {!!fullDescription && <ComplexDescription fullDescription={fullDescription} />}
            {amenities.length > 0 && <Infrastructure amenities={amenities} />}
          </Grid>
          <Offers name={name} />
          <Nearby />
          <Grid>
            <Area />
          </Grid>
        </div>
      </BodyClassName>
    );
  }
}

export default Show;

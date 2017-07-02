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
import { get } from '../../Api';
import type { Complex, Location } from '../types';

function formatLocation({ subLocalityName, street, house, postalCode }: Location): string {
  return [subLocalityName, street, house, postalCode]
    .filter(item => !!item)
    .join(', ');
}

class Show extends Component {
  state = {};

  state: Complex;

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
  complexes: Array<Complex>;

  render() {
    const { images = [], name, statistics = {}, location = {} } = this.state;
    const { propertiesCount } = statistics;
    return (
      <BodyClassName className="complex">
        <div>
          <Header
            name={name}
            location={formatLocation(location)}
          />
          <Gallery imageIds={images.map(image => image.id)} />
          <Grid>
            <SummaryHeader />
            <Features propertiesCount={propertiesCount} />
            <ComplexDescription />
            <Infrastructure />
          </Grid>
          <Offers />
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

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
import Location from './Location';
import { get } from '../../Api';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    get(`/complexes/${this.props.match.params.id}`).then(complex => this.setState(complex));
  }

  render() {
    const { name, location = {} } = this.state;
    console.log(this.state);
    return (
      <BodyClassName className="complex">
        <div>
          <Header
            name={name}
            location={`${location.subLocalityName}, ${location.street}, ${location.house}`}
          />
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
      </BodyClassName>
    );
  }
}

export default Show;

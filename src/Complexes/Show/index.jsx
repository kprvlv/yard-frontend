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

function formatLocation(location) {
  return [location.subLocalityName, location.street, location.house, location.postalCode].filter(item => !!item).join(', ');
}

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.load(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.load(nextProps.match.params.id);
    }
  }

  load(id) {
    get(`/complexes/${id}`).then(json => this.setState(json));
  }

  render() {
    const { images = [], name, statistics = {}, location = {} } = this.state;
    const { propertiesCount = 'N/A' } = statistics;
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
            <Location />
          </Grid>
        </div>
      </BodyClassName>
    );
  }
}

export default Show;

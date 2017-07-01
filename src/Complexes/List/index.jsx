/* eslint-disable react/no-unescaped-entities */

import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import BodyClassName from 'react-body-classname';
import MainLogo from './MainLogo';
import Description from './Description';
import Card from './Card';
import { getImageUrl } from '../../Utils';
import { get } from '../../Api';

function formatLocation(location) {
  return [location.subLocalityName, location.street, location.house].filter(item => !!item).join(', ');
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    get('/complexes?filter[state]=public').then(({ items: complexes }) => {
      this.setState({ complexes });
    });
  }

  render() {
    const { complexes = [] } = this.state;
    return (
      <BodyClassName className="complexes">
        <div>
          <MainLogo />
          <Description />
          <Grid>
            {complexes.map(complex =>
              (<Card
                key={complex.id}
                id={complex.id}
                location={formatLocation(complex.location)}
                title={complex.name}
                imageUrl={getImageUrl(complex.images[0].id)}
              />),
            )}
          </Grid>
        </div>
      </BodyClassName>
    );
  }
}

export default List;

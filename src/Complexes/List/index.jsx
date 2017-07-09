/* eslint-disable react/no-unescaped-entities */
// @flow

import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import BodyClassName from 'react-body-classname';
import MainLogo from './MainLogo';
import Description from './Description';
import Card from './Card';
import { get } from '../../apiUrl';
import type { ComplexType, LocationType } from '../types';
import { getImageUrl } from '../../utilities';

function formatLocation({ subLocalityName, street, house }: LocationType): string {
  return [subLocalityName, street, house]
    .filter(item => !!item)
    .join(', ');
}

class List extends Component {
  state = {
    complexes: [],
  };
  state: {
    complexes: Array<ComplexType>,
  };

  componentDidMount() {
    get('/complexes?filter[state]=public').then(({ items: complexes }) => {
      this.setState({ complexes });
    });
  }
  complexes: Array<ComplexType>;

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
                img={getImageUrl(complex.images[0].id)}
              >
                {complex.shortDescription}
              </Card>),
            )}
          </Grid>
        </div>
      </BodyClassName>
    );
  }
}

export default List;

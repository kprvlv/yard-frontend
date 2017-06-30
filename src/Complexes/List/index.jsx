/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import BodyClassName from 'react-body-classname';
import MainLogo from './MainLogo';
import Description from './Description';
import Card from './Card';
import { getImageUrl } from '../../Utils';
import { get } from '../../Api';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    get('/complexes?filter[state]=public').then(({ items = [] }) => {
      this.setState({ items });
    });
  }

  render() {
    const { items: complexes = [] } = this.state;
    console.log(complexes);
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
                location={`${complex.location.subLocalityName}, ${complex.location
                  .street}, ${complex.location.house}`}
                title={`${complex.name}`}
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

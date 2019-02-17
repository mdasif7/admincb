import React from 'react'
import { Grid} from 'semantic-ui-react';
import TableContent from '../TableContent/TableContent';
import CreateDish from '../../container/CreateDish/CreateDish';
import SearchDish from '../../container/SearchDish/SearchDish';


import './GridDivide.css'

const GridDivide = () => (
  <Grid className="grid-style">
    <Grid.Row className="row-no-padding ">
      <Grid.Column width={2} className='bgcolor-black'>
        <TableContent />
      </Grid.Column>
      <Grid.Column width={7} className="border-right">
        <CreateDish />
      </Grid.Column>
      <Grid.Column width={7}>
        <SearchDish />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridDivide;

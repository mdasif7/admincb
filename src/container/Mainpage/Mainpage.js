import React from "react";

import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import './MainPage.css'
import GridDivide from '../../component/GridDivide/GridDivide';
import Layout from '../../hoc/Layout/Layout';

const MainPage = ({ children }) => (
    <Container className='container-layout'>
      <Layout>
      <GridDivide />
      </Layout>
    </Container>
  );

  export default MainPage;
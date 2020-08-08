import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  Row, Col } from 'react-bootstrap';

import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import Pages from './components/Pages';

function App() {
  return (
    <div className="App">
      <Header/>
      <Row>
        <Col lg={3}>
          <LeftPanel/>
        </Col>
        <Col lg={9}>
          <Pages/>
        </Col>
      </Row>
      
      <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
      />
    </div>
  );
}

export default App;

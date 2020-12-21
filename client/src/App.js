import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <div className='homepage_container'>
      <div className='navbar_container'></div>
      <Row className='homepage_section'>
        <Col className='homepage_column column_left' md={5}>
          {/* <h1>
            How Can We Work <span>Together</span> to Accomplish Our Goals
          </h1> */}
          <h1>"83% of the population does not have goals"</h1>
          <cite>-Harvard Business Study</cite>
        </Col>
        <Col className='homepage_column column_right'>
          <div className='homepage_image'></div>
        </Col>
      </Row>
    </div>
  );
};

export default App;

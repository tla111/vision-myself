import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './goals.css';
import DisplayGoals from './DisplayGoals';
import Form from './Form';
import NavigationGoals from './NavigationGoals';

const Goals = () => {
  return (
    <div className='goals_container'>
      <Row className='goals_row_container'>
        <Col className='goals_column'>
          <DisplayGoals />
        </Col>
      </Row>
      <Row className='footer_row_container'>
        <Col md={7}>
          <Form />
        </Col>
        <Col>
          <NavigationGoals />
        </Col>
      </Row>
    </div>
  );
};

export default Goals;

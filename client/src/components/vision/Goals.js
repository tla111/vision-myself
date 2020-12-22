import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './goals.css';
import DisplayGoals from './DisplayGoals';
import Form from './Form';

const Goals = () => {
  return (
    <div className='goals_container'>
      <Row className='goals_row_container'>
        <Col>
          <DisplayGoals />
        </Col>
        <Col>
          <Form />
        </Col>
      </Row>
      <Row className='footer_row_container'></Row>
    </div>
  );
};

export default Goals;

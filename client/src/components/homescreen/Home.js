import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './home.css';
import Navigation from '../navigation/Navigation';

const Home = () => {
  return (
    <div>
      <div className='homepage_container'>
        <Row className='homepage_section'>
          <Col className='homepage_column column_left' md={5}>
            {/* <h1>
            How Can We Work <span>Together</span> to Accomplish Our Goals
          </h1> */}
            <h1>"83% of the population does not have goals"</h1>
            <cite>-Harvard Business Study</cite>
            <div className='nav_container'>
              <Navigation />
            </div>
          </Col>
          <Col className='homepage_column column_right'>
            <div className='homepage_image'></div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;

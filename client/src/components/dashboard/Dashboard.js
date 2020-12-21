import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import './dashboard.css';

import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';

const Dashboard = () => {
  return (
    <div>
      <div className='dashboard_screen_container'>
        <Row className='row_section'>
          <Col className='column_sections column_one' md={2}>
            <button className='btn btn-lg dashboard_nav_buttons'>
              <FontAwesomeIcon icon={faHome} className='nav_icons' />
              <Link to='/'>Homepage</Link>
            </button>
            <button className='btn btn-lg dashboard_nav_buttons'>
              <FontAwesomeIcon icon={faBalanceScale} className='nav_icons' />
              <Link to='/goals'>Goals</Link>
            </button>
          </Col>
          <Col className='column_sections column_two'>
            <div className='dashboard_boxes'>
              <div className='chart_header'></div>
              <BarChart />
            </div>
            <div className='dashboard_boxes'>
              <div className='chart_header'></div>
            </div>
          </Col>
          <Col className='column_sections column_three'>
            <div className='dashboard_boxes'>
              <div className='chart_header'></div>
              <LineChart />
            </div>
            <div className='dashboard_boxes'>
              <div className='chart_header'></div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;

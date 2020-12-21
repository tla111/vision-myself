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
              <div className='chart_header chart_header_1'></div>
              <BarChart />
            </div>
            <div className='dashboard_boxes card_stat card_stat_1'>
              <h2>
                "The study found that the 14% who have goals are 10x more
                successful than those without goals"
              </h2>
              <cite>-Harvard Business Study </cite>
            </div>
          </Col>
          <Col className='column_sections column_three'>
            <div className='dashboard_boxes'>
              <div className='chart_header chart_header_2'></div>
              <LineChart />
            </div>
            <div className='dashboard_boxes card_stat card_stat_2'>
              <h2>
                "Goals that are written are concrete and motivational. Making
                progress toward written goals increases feelings of success and
                well-being."
              </h2>
              <cite>-Psychology Today </cite>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;

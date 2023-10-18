import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Table } from 'reactstrap'
import CanvasJSReact from '@canvasjs/react-charts'
import Pie_chart from './Pie_chart'
import New_chart from './ApexChart'
import DataTable from './DataTable'
import ApexChart from './ApexChart'

function Dashboard1() {
  return (
    <>
      <Row style={{ marginTop: '3%' }}>
        <Col lg="4">
          <h6>Hello Shahrukh</h6>
        </Col>
        <Col lg="5"></Col>
        <Col lg="3">
          <div className="seach_back">
            <i className="fas fa-search search__icon" onClick="toggleShow()"></i>
            <input type="text" className="input1" placeholder="Search" />
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Col lg="3" md="3" sm="12">
          <div className="four_back">
            <Row>
              <Col lg="6" md="6" sm="6" xs="6">
                <div className="earning_col">
                  <img
                    src={require('../../images/ashnergroup_revenueicon.png')}
                    className="earning_img"
                  />
                </div>
              </Col>
              <Col lg="6" md="6" sm="6" xs="6" className="left_space top_space">
                <div style={{ textAlign: 'left' }}>
                  <span className="earning_text">Earning</span>
                </div>
                <div>
                  <span className="dollaer_num">$198K</span>
                </div>
                <div>
                  <b className="percent_num">37.8%</b>
                  <span className="this_text">this month</span>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg="3">
          <div className="four_back">
            <Row>
              <Col lg="6" md="6" sm="6" xs="6">
                <div className="earning_col1">
                  <img
                    src={require('../../images/ashnergroup_revenueicon.png')}
                    className="earning_img"
                  />
                </div>
              </Col>
              <Col lg="6" md="6" sm="6" xs="6" className="left_space top_space">
                <div style={{ textAlign: 'left' }}>
                  <span className="earning_text">Earning</span>
                </div>
                <div>
                  <span className="dollaer_num">$2.4K</span>
                </div>
                <div>
                  <b className="percent_num1">2%</b>
                  <span className="this_text">this month</span>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg="3">
          <div className="four_back">
            <Row>
              <Col lg="6" md="6" sm="6" xs="6">
                <div className="earning_col2">
                  <img
                    src={require('../../images/ashnergroup_revenueicon.png')}
                    className="earning_img"
                  />
                </div>
              </Col>
              <Col lg="6" md="6" sm="6" xs="6" className="left_space top_space">
                <div style={{ textAlign: 'left' }}>
                  <span className="earning_text">Earning</span>
                </div>
                <div>
                  <span className="dollaer_num">$2.4K</span>
                </div>
                <div>
                  <b className="percent_num1">2%</b>
                  <span className="this_text">this month</span>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg="3">
          <div className="four_back">
            <Row>
              <Col lg="6" md="6" sm="6" xs="6">
                <div className="earning_col3">
                  <img
                    src={require('../../images/ashnergroup_revenueicon.png')}
                    className="earning_img"
                  />
                </div>
              </Col>
              <Col lg="6" md="6" sm="6" xs="6" className="left_space top_space">
                <div style={{ textAlign: 'left' }}>
                  <span className="earning_text">Earning</span>
                </div>
                <div>
                  <span className="dollaer_num">$89K</span>
                </div>
                <div>
                  <b className="percent_num">11%</b>
                  <span className="this_text">this month</span>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="7">
            {/* <ApexChart /> */}
        </Col>
        <Col lg="5">
          <div className="common_back">
            <Pie_chart />
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: '5%' }}>
        <Col lg="12">
          <DataTable />
        </Col>
      </Row>
    </>
  )
}

export default Dashboard1

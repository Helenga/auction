import React, { Component } from 'react';
import './App.css';
import { Layout, Row, Col, Carousel, Icon, Pagination } from 'antd';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Row gutter={2}>
  <Col span={18}>
    
  </Col>
  <Col span={6}>
    <h2>{ "title" }</h2>
    <p><Icon type="tags-o" style={{fontSize: '15px'}} /></p>
    <p>{ "body" }</p>
  </Col>
</Row>
      </Layout>
    );
  }
}

export default App;

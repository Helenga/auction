import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import Lot from './Lot';


class LotsGrid extends React.Component {
    static PropTypes = {
        title: PropTypes.string,
        currentPrice: PropTypes.number
    }
    static defaultProps = {
        title: 'untitled',
    }
    render() {
        return (
            <Row gutter={16} style={{ marginBottom: '15px' }}>
            <Col span={8}>
                <Lot title={this.props.title} currentPrice={this.props.currentPrice}/>
            </Col>
            <Col span={8}>
                <Lot title={this.props.title} currentPrice={this.props.currentPrice}/>
            </Col>
            <Col span={8}>
                <Lot title={this.props.title} currentPrice={this.props.currentPrice}/>
            </Col>
          </Row>
        );
    }
}

export default LotsGrid;
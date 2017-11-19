import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import LotCard from './LotCard';


class LotsGrid extends React.Component {
    static PropTypes = {
        title: PropTypes.string,
        currentPrice: PropTypes.number
    }
    static defaultProps = {
        title: 'untitled',
        currentPrice: 0
    }
    render() {
        return (
            <Row gutter={16} style={{ marginBottom: '15px', display: 'flex' }}>
            <Col span={8}>
                <LotCard title={this.props.title} currentPrice={this.props.currentPrice}/>
            </Col>
            <Col span={8}>
                <LotCard title={this.props.title} currentPrice={this.props.currentPrice}/>
            </Col>
            <Col span={8}>
                <LotCard title={this.props.title} currentPrice={this.props.currentPrice}/>
            </Col>
          </Row>
        );
    }
}

export default LotsGrid;
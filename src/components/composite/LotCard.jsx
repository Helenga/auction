import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Button }  from 'antd';
import LotImage from '../elementary/LotImage';
import LotSummary from '../elementary/LotSummary';
import DirectiveMakeBet from '../elementary/LotSummary';

class Lot extends React.Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        title: 'untitled'
    }
    static PropTypes = {
        imgSrc: PropTypes.arrayOf(string),
        title: PropTypes.string,
        currentPrice: PropTypes.number,
        bet: PropTypes.number
    }
    render() {
        return (
            <Card title={this.props.title} bordered={false} style={{ minHeight: '350px' }}>
                <LotImage imgSrc={this.props.imgSrc}/>
                <LotSummary />
                <DirectiveMakeBet />
            </Card>
        );
    }
}

export default Lot;
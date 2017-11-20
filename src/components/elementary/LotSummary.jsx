import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button }  from 'antd';

class LotSummary extends React.Component {
    static defaultProps = {
        timer: (new Date).toLocaleDateString(),
        currentPrice: 1
    }
    static PropTypes = {
        userId: PropTypes.number
    }
    render() {
        return (
            <div style={{ paddingTop: 10 }}>
                <h2 style={{ color: '#fff' }}>Дата окончания: {this.props.timer}</h2>
                <h2 style={{ color: '#fff' }}>Текущая ставка: {this.props.currentPrice}</h2>
            </div>
        );
    }
}

export default LotSummary;                

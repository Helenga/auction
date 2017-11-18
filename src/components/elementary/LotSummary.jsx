import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button }  from 'antd';

class DirectiveMakeBet extends React.Component {
    static PropTypes = {
        userId: PropTypes.number
    }
    render() {
        return (
            <div>
                <h2 className='timer'>До конца {this.props.timer}</h2>
                <h2>Текущая ставка {this.props.currentPrice}</h2>
            </div>
        );
    }
}

export default DirectiveMakeBet;                

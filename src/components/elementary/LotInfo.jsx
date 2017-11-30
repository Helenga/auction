import React, { Component } from 'react';
import PropTypes from 'prop-types';

const LotInfo = props => {
    return (
        <div style={{ marginLeft: 20 }}>
            <h3 style={{ color: '#fff' }}>Название лота: {props.title}</h3><br/>
            <h3 style={{ color: '#fff' }}>Местонахождение: {props.location}</h3><br/>
            <h3 style={{ color: '#fff' }}>До окончания: {props.beforeClosing} мс</h3><br/>
            <h3 style={{ color: '#fff' }}>Количество ставок: {props.betsNumber}</h3><br/>
        </div> 
    );
}

LotInfo.defaultProps = {
    title: 'undefined',
    location: 'undefined',
    beforeClosing: 0,
    betsNumber: 1
}
LotInfo.PropTypes = {
    title: PropTypes.string,
    location: PropTypes.string,
    beforeClosing: PropTypes.number,
    betsNumber: PropTypes.number
}

export default LotInfo;
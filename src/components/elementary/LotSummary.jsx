import React, { Component } from 'react';

import PropTypes from 'prop-types';

const LotSummary = props => {
    return (
        <div style={{ paddingTop: 10 }}>
            <h2 style={{ color: '#fff' }}>До окончания: {props.beforeClosing} мс</h2>
            <h2 style={{ color: '#fff' }}>Количество ставок: {props.betsNumber}</h2>
        </div>
    );
}

LotSummary.defaultProps = {
    beforeClosing: 0,
    betsNumber: 1
}
LotSummary.PropTypes = {
    beforeClosing: PropTypes.number,
    userId: PropTypes.number
}

export default LotSummary;                

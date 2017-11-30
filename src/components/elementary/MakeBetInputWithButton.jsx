import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Tabs, InputNumber } from 'antd';

const MakeBetInputWithButton = props => {
    const handleClick = () => {
        const bet = document.getElementById('betInput').value
        props.makeBetHandler(props.lotId, props.userId, bet)
    }
    return(
        <div style={{ height: '13vh', clear: 'both', float: 'right', display: 'flex' }}>
            <InputNumber id='betInput' min={props.minBet} max={props.maxBet} 
                defaultValue={props.minBet}
                style={{ minWidth: '130px', minHeight: '7vh', fontSize: '20px', padding: '3%', textAlign: 'justify', left: 20 }}
            />
            <Button type="primary" onClick={handleClick}
                style={{ minHeight: '7vh', fontSize: '20px' }} 
            >
                Сделать ставку
            </Button>
        </div>            
    );
}

MakeBetInputWithButton.defaultProps = {
    minBet: 100,
    maxBet: 1000
}
MakeBetInputWithButton.PropTypes = {
    minBet: PropTypes.number,
    maxBet: PropTypes.number
}

export default MakeBetInputWithButton;
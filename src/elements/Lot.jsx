import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button }  from 'antd';
import LotImage from './LotImage';
import ClosedLotTag from './ClosedLotTag';
import Timer from './Timer';

class Lot extends React.Component {
    static defaultProps = {
        title: 'untitled',
        userHasBet: false
    }

    showThisUserBet(userHasBet) {
        document.getElementById('madeBet').hidden = false;
    }

    render() {
        return (
            <Card title={this.props.title} bordered={false} style={{ minHeight: '350px' }}>

                <LotImage />

                <h2 className='timer'>До конца {this.props.timer}</h2>
                <h2>Текущая ставка {this.props.currentPrice}</h2>
                <h2 id={`madeBet`} style={{ visibility: 'hidden', position: 'absolute' }}>
                Ваша ставка {this.props.bet}
                </h2>
                <Button type="primary" style={{ bottom: '-15px' }}
                    className="makeBetButton"
                >
                Сделать ставку >>
                </Button>
            </Card>
        );
    }
}

Lot.PropTypes = {
    title: PropTypes.string,
    timer: PropTypes.oneOfType([PropTypes.instanceOf(Timer), PropTypes.instanceOf(ClosedLotTag)]),
    currentPrice: PropTypes.number,
    bet: PropTypes.number,
    userHasBet: PropTypes.bool
}

export default Lot;
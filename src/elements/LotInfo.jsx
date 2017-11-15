import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Icon, Tabs, InputNumber } from 'antd';
import LotImage from './LotImage';
import ClosedLotTag from './ClosedLotTag';
import Timer from './Timer';
const TabPane = Tabs.TabPane;

class LotInfo extends React.Component {
    static defaultProps = {
        author: 'undefined',
        location: 'undefined',
        minBet: 100,
        maxBet: 1000,
        description: 'undefined'
    }
    static PropTypes = {
        author: PropTypes.string,
        location: PropTypes.string,
        timer: PropTypes.oneOfType([PropTypes.instanceOf(Timer), PropTypes.instanceOf(ClosedLotTag)]),
        currentPrice: PropTypes.number,
        minBet: PropTypes.number,
        maxBet: PropTypes.number,
        description: PropTypes.string
    }

    onChange(value) {
        console.log('changed', value);
    }
    render() {
        return (
            <div style={{ background: '#fff', padding: 24, margin: '20px', minHeight: '60vh' }}>
            
                <div style={{ width: '50%', float: 'left' }}>
                    <LotImage />
                </div>
            
                <div style={{ width: '50%', float: 'right' }}>
                    <Tabs type="card">
                        <TabPane tab="Сводка" key="1">
                            <div style={{ marginLeft: 20 }}>
                                <h3>Автор лота {this.props.author}</h3><br/>
                                <h3>Местонахождение {this.props.location}</h3><br/>
                                <h3>До окончания {this.props.timer}</h3><br/>
                                <h3>Текущая ставка {this.props.currentPrice}</h3><br/>
                            </div> 
                        </TabPane>
                        <TabPane tab="Описание" key="2">
                            <div style={{ marginLeft: 20, fontSize: 14, overflowY: 'auto' }}>
                                <p>
                                    {this.props.description}
                                </p>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
                <div style={{ height: '13vh', clear: 'both', padding: '2vh', float: 'right' }}>
                <InputNumber min={this.props.minBet} max={this.props.maxBet} 
                    defaultValue={100} onChange={this.onChange} 
                    style={{ width: '120px', height: '8vh', fontSize: '20px', padding: '10px' }}
                />
                <Button type="primary" 
                    style={{ height: '8vh', fontSize: '20px', left: '-10px' }} 
                >
                Сделать ставку
                </Button>
            </div>

        </div>);
    }
}



export default LotInfo;
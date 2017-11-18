import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Icon, Tabs, InputNumber } from 'antd';
const TabPane = Tabs.TabPane;

class MakeBetInputWithButton extends React.Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        minBet: 100,
        maxBet: 1000
    }
    static PropTypes = {
        minBet: PropTypes.number,
        maxBet: PropTypes.number
    }
    onChange(value) {
        console.log('changed', value);
    }
    render() {
        return(
            <div style={{ height: '13vh', clear: 'both', padding: '2vh', float: 'right' }}>
                <InputNumber min={this.props.minBet} max={this.props.maxBet} 
                    defaultValue={100} onChange={this.onChange} 
                    style={{ width: '120px', height: '8vh', fontSize: '20px', padding: '10px' }}
                />
                <Button type="primary" 
                    style={{ height: '8vh', fontSize: '20px', left: '-10px' }} 
                >
                    <Link to='#'>Сделать ставку</Link>
                </Button>
            </div>            
        );
    }
}

export default MakeBetInputWithButton;
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
            <div style={{ height: '13vh', clear: 'both', float: 'right', display: 'flex' }}>
                <InputNumber min={this.props.minBet} max={this.props.maxBet} 
                    defaultValue={100} onChange={this.onChange} 
                    style={{ minWidth: '130px', minHeight: '7vh', fontSize: '20px', padding: '3%', textAlign: 'justify', left: 20 }}
                />
                <Button type="primary" 
                    style={{ minHeight: '7vh', fontSize: '20px' }} 
                >
                    <Link to='#'>Сделать ставку</Link>
                </Button>
            </div>            
        );
    }
}

export default MakeBetInputWithButton;
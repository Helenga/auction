import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import LotImage from './LotImage';
import LotInfo from '../elementary/LotInfo';
import LotDescription from '../elementary/LotDescription';
import MakeBetInputWithButton from '../elementary/MakeBetInputWithButton';

const TabPane = Tabs.TabPane;

class Lot extends React.Component {
    constructor(props) {
        super(props);
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
                            <LotInfo />
                        </TabPane>
                        <TabPane tab="Описание" key="2">
                            <LotDescription />
                        </TabPane>
                    </Tabs>
                </div>
                <MakeBetInputWithButton />
            </div>
        );
    }
}



export default Lot;
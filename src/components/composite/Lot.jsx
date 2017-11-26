import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import LotImage from '../elementary/LotImage';
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
            <div style={{ backgroundColor: 'rgba(226, 222, 242, 0.2)', borderRadius: 20,
                          padding: 24, margin: '20px', height: '80vh' }}>
                <div style={{ width: '50%', float: 'left', padding: 10 }}>
                    <LotImage />
                </div>
                <div style={{ width: '50%', float: 'right', height: '65vh' }}>
                    <Tabs style={{ color: '#fff' }}>
                        <TabPane tab="Сводка" key="1" style={{ color: '#fff' }}>
                            <LotInfo />
                        </TabPane>
                        <TabPane tab="Описание" key="2" style={{ color: '#fff' }}>
                            <LotDescription description={this.props.description}/>
                        </TabPane>
                    </Tabs>
                    
                </div>
                <MakeBetInputWithButton />
            </div>
        );
    }
}

export default Lot;
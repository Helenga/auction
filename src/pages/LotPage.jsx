import React, { Component } from 'react';
import { Layout, Button, Icon, Carousel, Tabs, InputNumber } from 'antd';
import Footer from '../elements/Footer';
import LotInfo from '../elements/LotInfo';
const { Header, Content } = Layout;

class LotPage extends React.Component {
constructor() {
    super();
    this.defaultProps = { minBet: 100, maxBet: 1000 };
}
    render() {
        return (
            <Layout style={{ height: '100vh' }}>
            <Header>
            <Button type="primary" style={{ marginLeft: 20 }}>
                <Icon type="left" />
                Назад к лотам
            </Button>
            <Button type="primary" 
                style={{ float: 'right', top: '27%', marginRight: '20px' }}>
                Личный кабинет
            </Button>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <LotInfo />
            </Content>
            <Footer />
          </Layout> 
        );
    }
}

export default LotPage;
import React, { Component } from 'react';
import { Layout, Button, Icon, Carousel, Tabs, InputNumber } from 'antd';
import Footer from '../elements/Footer';
import LotsGrid from '../elements/LotsGrid'

const { Header, Content } = Layout;
const TabPane = Tabs.TabPane;

class UserProfile extends React.Component {
constructor() {
    super();
}
    render() {
        return (
            <Layout style={{ height: '100vh' }}>
            <Header>
            <Button type="primary" style={{ marginLeft: 20 }}>
                <Icon type="left" />
                Назад к лотам
            </Button>
            <Button type="primary" style={{ float: 'right', top: '27%', marginRight: '20px' }}>
                Выйти
            </Button>
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Tabs>
                <TabPane tab="Профиль" key="1"></TabPane>
                <TabPane tab="Лоты под ставкой" key="2"><LotsGrid /></TabPane>
            </Tabs>
                
            </Content>
            <Footer />
          </Layout> 
        );
    }
}

export default UserProfile;
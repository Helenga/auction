import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Tabs } from 'antd';
import Footer from '../components/elementary/Footer';
import LotsGrid from '../components/composite/LotsGrid';
import BackToLotsButton from '../components/elementary/BackToLotsButton';
import ExitButton from '../components/elementary/ExitButton';

const { Header, Content } = Layout;
const TabPane = Tabs.TabPane;

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout style={{ height: '100vh' }}>
                <Header>
                    <BackToLotsButton />
                    <ExitButton />
                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    <Tabs>
                        <TabPane tab="Профиль" key="1">

                        </TabPane>
                        <TabPane tab="Лоты под ставкой" key="2">
                            <LotsGrid />
                        </TabPane>
                    </Tabs>
                </Content>
                <Footer />
            </Layout> 
        );
    }
}

export default UserProfile;
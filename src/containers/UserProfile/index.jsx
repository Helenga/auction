import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Tabs } from 'antd';
import backImg from '../../Pictures/darkPattern.jpg';
import Footer from '../../components/elementary/Footer';
import MadeBetsTable from '../../components/elementary/MadeBetsTable';
import BackToLotsButton from '../../components/elementary/BackToLotsButton';
import ExitButton from '../../components/elementary/ExitButton';
import Profile from '../../components/composite/Profile';

const { Header, Content } = Layout;
const TabPane = Tabs.TabPane;

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout style={{ height: '100vh', backgroundImage: `url(${backImg})` }}>
                <Header style={{ background: '#0b0b0c' }}>
                    <BackToLotsButton />
                    <ExitButton />
                </Header>
                <Content style={{ margin: '24px 70px', padding: "0 50px", minHeight: 280,
                                  backgroundColor: 'rgba(226, 222, 242, 0.2)', borderRadius: 20 }}>
                    <Tabs style={{ color: '#fff', padding: 20 }}>
                        <TabPane tab="Профиль" key="1">
                            <Profile />
                        </TabPane>
                        <TabPane tab="Лоты под ставкой" key="2">
                            <MadeBetsTable />
                        </TabPane>
                        <TabPane tab="Мои лоты" key="3">
                            
                        </TabPane>
                    </Tabs>
                </Content>
                <Footer />
            </Layout> 
        );
    }
}

export default UserProfile;
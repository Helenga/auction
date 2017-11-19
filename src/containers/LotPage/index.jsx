import React, { Component } from 'react';
import { Layout } from 'antd';
import Footer from '../../components/elementary/Footer';
import Lot from '../../components/composite/Lot';
import BackToLotsButton from '../../components/elementary/BackToLotsButton';
import backImg from '../../Pictures/darkPattern.jpg';
import UserProfileButton from '../../components/elementary/UserProfileButton';
const { Header, Content } = Layout;

class LotPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout style={{ height: '100vh', backgroundImage: `url(${backImg})` }}>
            <Header style={{ background: '#0b0b0c' }}>
                <BackToLotsButton />
                <UserProfileButton />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Lot style={{ backgroundColor: '#c7c4d3',
                              borderRadius: 20  }}/>
            </Content>
            <Footer />
          </Layout> 
        );
    }
}

export default LotPage;
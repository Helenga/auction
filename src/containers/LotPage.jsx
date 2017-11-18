import React, { Component } from 'react';
import { Layout } from 'antd';
import Footer from '../components/elementary/Footer';
import Lot from '../components/composite/Lot';
import BackToLotsButton from '../components/elementary/BackToLotsButton';
const { Header, Content } = Layout;

class LotPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout style={{ height: '100vh' }}>
            <Header>
                <BackToLotsButton />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Lot />
            </Content>
            <Footer />
          </Layout> 
        );
    }
}

export default LotPage;
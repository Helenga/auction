import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Button, BackTop } from 'antd';
import { Link } from 'react-router-dom';

import LotsCategoriesNavBar from '../elements/LotsCategoriesNavBar';
import SearchBar from '../components/elementary/SearchBar';
import Footer from '../components/elementary/Footer';
import LotsGrid from '../components/composite/LotsGrid';
import UserProfileButton from '../components/elementary/UserProfileButton';

const { Header, Content, Sider } = Layout;

class LotsListPage extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
    render() {
      return(
        <Layout style={{ minHeight: '100vh' }}>
          <Sider style={{ overflow: 'visible', background: '#fff', left: 0, position: 'relative' }}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <LotsCategoriesNavBar />
          </Sider>
        <Layout style={{ position: 'relative' }}>
          <Header style={{ background: '#fff', padding: 0 }}>
            <SearchBar />
            <UserProfileButton />      
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <LotsGrid />
            <LotsGrid />
            <LotsGrid />
            <BackTop style={{ right: '20px' }}/>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default LotsListPage;
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Button, BackTop } from 'antd';
import { Link } from 'react-router-dom';
import backImg from '../Pictures/darkPattern.jpg';

import LotsCategoriesNavBar from '../components/composite/LotsCategoriesNavBar';
import SearchBar from '../components/elementary/SearchBar';
import Footer from '../components/elementary/Footer';
import LotsGrid from '../components/composite/LotsGrid';
import UserProfileButton from '../components/elementary/UserProfileButton';
import LotsPagination from '../components/elementary/LotsPagination';

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
          {/*<Sider style={{ overflow: 'visible', background: '#fff', left: 0, position: 'relative' }}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <LotsCategoriesNavBar />
      </Sider> */}
        <Layout style={{ position: 'relative', backgroundImage: `url(${backImg})`}}>
          <Header style={{ background: '#0b0b0c', padding: 0 }}>
            <SearchBar />
            <UserProfileButton />      
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, 
                            minHeight: 280, backgroundColor: 'rgba(226, 222, 242, 0.2)',
                            borderRadius: 20  }}>
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
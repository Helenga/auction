import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Button, BackTop } from 'antd';

import LotsGrid from '../elements/LotsGrid';
import LotsCategoriesNavBar from '../elements/LotsCategoriesNavBar';
import SearchBar from '../elements/SearchBar';
import Footer from '../elements/Footer';

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
      <Button style={{ float: 'right', top: '27%', marginRight: '20px' }}>Личный кабинет</Button>      
    </Header>
    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
      <LotsGrid />
      <LotsGrid />
      <LotsGrid />
      <BackTop style={{ right: '20px' }}/>
    </Content>
    <Footer />
  </Layout>
</Layout>);
  }
}

export default LotsListPage;
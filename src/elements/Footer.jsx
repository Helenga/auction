import React, { Component } from 'react';
import { Layout } from 'antd';
import Lot from './Lot';


class Footer extends React.Component {
    render() {
        return (
            <Layout.Footer style={{ textAlign: 'center', background: '#000' }}>
              Footer
            </Layout.Footer>
        );
    }
}

export default Footer;

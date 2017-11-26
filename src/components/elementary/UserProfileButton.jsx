import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';
import DefineUserModal from '../../containers/DefineUserModal/index';

class BackToLotsButton extends React.Component {
    static defaultProps = {
        userId: 1
    }
    render() {
        return (<div>
            <Button type="primary"
                style={{ float: 'right', top: '27%', marginRight: '20px' }}>
                Личный кабинет
            </Button>
            </div>
        );
    }
    
}

export default BackToLotsButton;

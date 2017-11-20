import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';

class BackToLotsButton extends React.Component {
    static defaultProps = {
        userId: 1
    }
    render() {
        return (
            <Button type="primary" 
                style={{ float: 'right', top: '27%', marginRight: '20px' }}>
                <Link to={`/users/${this.props.userId}`}>
                    Личный кабинет
                </Link>
            </Button>
        );
    }
    
}

export default BackToLotsButton;

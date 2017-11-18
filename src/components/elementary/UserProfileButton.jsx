import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';

const BackToLotsButton = () => {
    return (
        <Button type="primary" 
            style={{ float: 'right', top: '27%', marginRight: '20px' }}>
            <Link to='users/1'>
                Личный кабинет
            </Link>
        </Button>
    );
}

export default BackToLotsButton;

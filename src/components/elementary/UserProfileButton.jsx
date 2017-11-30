import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';

const UserProfileButton = props => {
    return (
        <div>
            <Button type="primary" 
                style={{ float: 'right', marginTop: '12%', marginRight: '20px' }}>
                <Link to={`/users/${props.userId}`}>Личный кабинет</Link>
            </Button>
        </div>
    );
}

UserProfileButton.PropTypes = {
    userId: PropTypes.number
}
UserProfileButton.defaultProps = {
    userId: 1
}

export default UserProfileButton;

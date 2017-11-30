import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button }  from 'antd';

const DirectiveMakeBet = props => {
    return (
        <Button type="primary" style={{ bottom: '-15px', width: '100%' }}
        >
            <Link to={`/lots/${props.lotId}`}>Сделать ставку</Link>
        </Button>
    );
}

DirectiveMakeBet.PropTypes = {
    lotId: PropTypes.number
}

export default DirectiveMakeBet;
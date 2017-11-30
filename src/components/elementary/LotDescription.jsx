import React, { Component } from 'react';
import PropTypes from 'prop-types';

const LotDescription = props => {
    return (
        <div style={{ marginLeft: 20, fontSize: 14, overflowY: 'auto' }}>
            <p>
                {props.description}
            </p>
        </div>
    );
}

LotDescription.PropTypes = {
    description: PropTypes.string
}

export default LotDescription;

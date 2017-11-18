import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LotInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        author: 'undefined',
        location: 'undefined',
        timer: (new Date).toDateString()
    }
    static PropTypes = {
        author: PropTypes.string,
        location: PropTypes.string,
        currentPrice: PropTypes.number
    }

    render() {
        return (
            <div style={{ marginLeft: 20 }}>
                <h3>Автор лота {this.props.author}</h3><br/>
                <h3>Местонахождение {this.props.location}</h3><br/>
                <h3>До окончания {this.props.timer}</h3><br/>
                <h3>Текущая ставка {this.props.currentPrice}</h3><br/>
            </div> 
        );
    }
}

export default LotInfo;
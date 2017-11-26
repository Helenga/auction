import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LotInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        author: 'undefined',
        location: 'undefined',
        beforeClosing: 0,
        betsNumber: 1
    }
    static PropTypes = {
        author: PropTypes.string,
        location: PropTypes.string,
        beforeClosing: PropTypes.number,
        betsNumber: PropTypes.number
    }

    render() {
        return (
            <div style={{ marginLeft: 20 }}>
                <h3 style={{ color: '#fff' }}>Автор лота: {this.props.author}</h3><br/>
                <h3 style={{ color: '#fff' }}>Местонахождение: {this.props.location}</h3><br/>
                <h3 style={{ color: '#fff' }}>До окончания: {this.props.beforeClosing}</h3><br/>
                <h3 style={{ color: '#fff' }}>Количество ставок: {this.props.betsNumber}</h3><br/>
            </div> 
        );
    }
}

export default LotInfo;
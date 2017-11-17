import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import defaultPicture from '../Pictures/default.jpg';

class LotsImage extends React.Component {
    static defaultProps = {
        imgSrc: defaultPicture
    }
    static PropTypes = {
        imgSrc: PropTypes.string
    }
    render() {
        return (
            <Carousel autoplay >
                <div >
                    <img src={`${this.props.imgSrc}`} alt='Lot' 
                        style={{ maxWidth: '100%', maxHeight: 'auto' }}
                    >
                    </img>
                </div>
            </Carousel>
        );
    }
}

export default LotsImage;
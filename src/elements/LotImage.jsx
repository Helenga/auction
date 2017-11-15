import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import '../Pictures/default.jpg';



class LotsImage extends React.Component {
    static defaultProps = {
        imgSrc: '../Pictures/default.jpg'
    }
    render() {
        return (
            <Carousel autoplay >
                <div >
                    <img src={require('../Pictures/default.jpg')/*{`${this.props.imgSrc}`}*/} alt='Lot' 
                        style={{ maxWidth: '100%', maxHeight: 'auto' }}
                    >
                    </img>
                </div>
            </Carousel>
        );
    }
}

LotsImage.PropTypes = {
    imgSrc: PropTypes.string
}

export default LotsImage;
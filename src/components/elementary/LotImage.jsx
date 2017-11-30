import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import defaultPicture from '../../Pictures/default.jpg';

const LotImage = props => {
    return (
        <Carousel autoplay >
            <div >
                <img src={`${props.imgSrc}`} alt='Lot' 
                    style={{ maxWidth: '100%', maxHeight: 'auto' }}
                >
                </img>
            </div>
        </Carousel>
    );
}

LotImage.defaultProps = {
    imgSrc: defaultPicture
}
LotImage.PropTypes = {
    imgSrc: PropTypes.string
}

export default LotImage;
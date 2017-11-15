import React, { Component } from 'react';

class ClosedLotTag extends React.Component {
    render() {
        return (
            <div className='closed' 
                style={{ visibility: 'hidden', 
                         position: 'absolute', 
                         fontSize: 20, 
                         height: 25, 
                         width: 'inhereted' 
                         }}>
            CLOSED
            </div>
        );
    }
}

export default ClosedLotTag;
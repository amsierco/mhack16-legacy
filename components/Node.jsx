import React, {useState} from 'react';

// Import css

// Road map component
const Node = ({data}) => {

    return (
        <div className='node-container'>
            <div>data.id</div>
            <div>data.title</div>
            <div>data.data</div>
        </div>
    );
}

export default Node;
import React, {useState} from 'react';

// Import css
import './RoadMap.css';

// Road map component
const RoadMap = () => {
    
    const nodes = [
        {
            id: 1,
            title: 'title',
            data: 'data',
        },
        {
            id: 2,
            title: 'title2',
            data: 'data2',
        },
        {
            id: 3,
            title: 'title3',
            data: 'data3',
        }
    ]

    // Array of lessons from API
    // const [nodes, setnotes] = useState([]);

    return (
        <div className='roadmap-container'>
            <h2>Your roadmap</h2>
            <div className='node-wrapper'>
                <ul>
                {nodes.map(node => { /* Loop over all nodes and return node comp */
                    return (
                        <li id={node.id}>
                        <Node data={node}/>
                        </li>
                    )
                })}
                </ul>
            </div>
            <div className='practice-container'>

            </div>
        </div>
    );
}

export default RoadMap;
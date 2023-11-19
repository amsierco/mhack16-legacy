import React, {useState} from 'react';

// Import components
import Node from './Node';

// Import css
import './RoadMap.css';

// Road map component
const RoadMap = () => {

    const json_data = { // Test data
        lessons: [
            {
                id: 1,
                title: 'title',
                data: 'beans'
            },
            {
                id: 1,
                title: 'title',
                data: 'beans'
            }
        ]
    };
    

    return (
        <div className='roadmap-container'>
            <h2>Your roadmap</h2>
            <div className='list-container'>
                <ul>
                {json_data.lessons.map((lesson) => {
                    return (
                        <li key={1}>
                            <Node lesson={lesson} />
                        </li>
                    );
                })}
                </ul>
            </div>
            <div className='practice-container'>

            </div>
        </div>
    );
}

export default RoadMap;

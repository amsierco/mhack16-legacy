import React, {useState} from 'react';

// Import components
import Node from './Node';

// Import css
import './RoadMap.css';

// Road map component
const RoadMap = ({data}) => {
    return (
        <div className='roadmap-container'>
            <div id='title'>Your roadmap</div>
            <div className='list-container'>
                {data.lessonPlans.map((lesson) => {
                    return (
                        <div key={lesson.title} id='list'>
                            <Node lesson={lesson} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default RoadMap;

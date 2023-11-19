import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';

// Import components
import Node from './Node';
import Page from './Page';
// import Box from '@mui/material/Box';


// Import css
import './RoadMap.css';

// Road map component
const RoadMap = () => {

    const location = useLocation(); // Hook to access the current location object
    const data = location.state; // Accessing the state passed during navigation
    // console.log(data)
    const [lessonPlan, setLessonPlan] = React.useState(data.lessonPlans[0]);

    return (
        <div className='container'>
            {/* <Box marginTop={20}> */}
            <div className='roadmap-container'>
                <div id='title'>Your roadmap</div>
                <div className='list-container'>
                    {data.lessonPlans.map((lesson) => {
                        return (
                            <div key={lesson.title} id='list' onClick={() => setLessonPlan(lesson)}>
                                <Node lesson={lesson} />
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* </Box> */}
            <div className='page-container'>
                <Page lessonPlan={lessonPlan} />
            </div>
        </div>
    );
}

export default RoadMap;

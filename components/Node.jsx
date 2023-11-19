import React from 'react';

// Import css

// Road map component
const Node = ({lesson}) => {

    const title = lesson.title;
    const content = lesson.content;
    const steps = lesson.steps;

    return (
        <>
            <div>{lesson.id}</div>
            <div>{lesson.title}</div>
            <div>{lesson.data}</div>
        </>
    );
}

export default Node;
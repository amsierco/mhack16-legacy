import React, {useState, useEffect} from 'react';

// Road map component
const Node = ({lesson}) => {
    const title = lesson.title;
    const content = lesson.content;
    const [hover, setHover] = useState(false);

    useEffect(() => { 
    }, [])

    return (
        <div 
            className='node-el' 
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
        >
            <h4>{title}</h4>
            {hover ? <div>{content}</div> : null }
        </div>
    );
}

export default Node;
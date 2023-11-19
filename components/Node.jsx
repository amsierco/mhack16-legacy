import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

// Road map component
const Node = ({lesson}) => {
    const title = lesson.title;
    const content = lesson.content;
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    return (
        <div className='node-el' onClick={()=>navigate('/page',  { state: title })}> {/* Load new info page */}
        <div>{title}</div>
        <div id='hover-content'>{content} </div>
        {/* Alternative if we want content to be hover only */}
        {/* <div 
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}>
            {title}
        </div>
        {hover ? <div id='hover-content'>{content}</div> : null } */}
        </div>
    );
}

export default Node;
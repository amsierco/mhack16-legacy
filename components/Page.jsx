import React from 'react';

const Page = ({ lessonPlan }) => {
  return (
    <div style={{ marginTop: '20px', marginLeft: '180px' }}>
      <h2 style={{ textAlign: 'center' }}>{lessonPlan.title}</h2>
      <hr />
      <p style={{ textAlign: 'justify' }}>{lessonPlan.content}</p>
      <hr />
      <h3>Steps:</h3>
      <ol style={{ listStyleType: 'none', paddingLeft: '0', textAlign: 'left'}}>
        {lessonPlan.steps.map((step, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <div style={{ fontWeight: 'bold' }}>Step {index + 1}:</div>
            <div style={{ marginLeft: '20px' }}>
              <p>{step.description}</p>
              <div>
                <h4>Resources:</h4>
                <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                  {Object.entries(step.resources).map(([name, url], resourceIndex) => (
                    <li key={resourceIndex}><a href={url}>{name}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Tools:</h4>
                <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                  {Object.entries(step.tools).map(([name, url], toolIndex) => (
                    <li key={toolIndex}><a href={url}>{name}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <hr />
      <h3>Exercises:</h3>
      <ul style={{ listStyleType: 'none', paddingLeft: '0', textAlign: 'left' }}>
        {lessonPlan.exercises.map((exercise, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>{exercise.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;

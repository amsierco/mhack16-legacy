import React from 'react';

// Page Component to display a single lesson plan
const Page = ({ lessonPlan }) => {
  return (
    <div>
      <h2>{lessonPlan.title}</h2>
      <p>{lessonPlan.content}</p>
      <h3>Steps:</h3>
      <ol>
        {lessonPlan.steps.map((step, index) => (
          <li key={index}>
            {step.description}
            {/* Optional: Display resources and tools here if needed */}
            <div>
              <h4>Resources:</h4>
              <ul>
                {Object.entries(step.resources).map(([name, url], resourceIndex) => (
                  <li key={resourceIndex}><a href={url}>{name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Tools:</h4>
              <ul>
                {Object.entries(step.tools).map(([name, url], toolIndex) => (
                  <li key={toolIndex}><a href={url}>{name}</a></li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
      <h3>Exercises:</h3>
      <ul>
        {lessonPlan.exercises.map((exercise, index) => (
          <li key={index}>{exercise.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
import React from 'react';


// Page Component to display the entire page
const Page = ({ lesson }) => {
    return (
        <div>
          <h2>{lesson.title}</h2>
          <p>{lesson.content}</p>
          <h3>Steps:</h3>
          <ol>
            {lesson.steps.map((step, index) => (
              <li key={index}>
                {step.description}
                {/* Display resources and tools here if needed */}
              </li>
            ))}
          </ol>
          <h3>Exercises:</h3>
          <ul>
            {lesson.exercises.map((exercise, index) => (
              <li key={index}>{exercise.description}</li>
            ))}
          </ul>
        </div>
      );
};

export default Page;
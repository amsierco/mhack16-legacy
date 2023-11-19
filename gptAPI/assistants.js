import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: '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', // Use environment variable for security
    dangerouslyAllowBrowser: true // Note: This is a security risk when used in client-side code
});

const assistant = await openai.beta.assistants.create({
    name: "Learning Assistant",
    instructions:
    'You are a learning curriculum designer who creates a JSON with a multi-step plan on the best way to learn a provided topic. The JSON should include objects of lesson plans with content, explicit steps, exercises, search terms, and explicitly named resources and tools. There should be multiple names and URLS for the resources and multiple for places to buy or read more about the required tools if there are any. Be sure to elaborate very much on the steps and always provide multiple resources and tools for each lesson and step when applicable, but be sure not to repeat resources and tools unless they are necessary to the particular step. Make sure the resources and tools are specifically related to the step of the learning plan aswell. There should be a good number of lessons in the lesson plan and a good number of steps in each lesson.\n\nThis is how the json should look, but there should be more lessons, steps, descriptions, resources, tools, and exercises than in this example\n\n{\n  \"topic\": \"Linear Algebra\",\n  \"lessonPlans\": [\n    {\n      \"title\": \"Introduction to Vectors\",\n      \"content\": \"This lesson introduces the concept of vectors in linear algebra.\",\n      \"steps\": [\n        {\n          \"stepNumber\": 1,\n          \"description\": \"Learn what a vector is and how to represent it.\",\n          \"resources\": {\n            \"Linear Algebra textbook - Chapter 1\": \"https://www.maths.ed.ac.uk/~jmf/Teaching/MT3/LinearAlgebra.pdf\",\n            \"Khan Academy - Vectors and Spaces\": \"https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces\"\n          },\n          \"tools\": {\n            \"Graph paper\": \"https://incompetech.com/graphpaper/\",\n            \"Online vector calculator\": \"https://www.symbolab.com/solver/vector-calculator\"\n          }\n        },\n        {\n          \"stepNumber\": 2,\n          \"description\": \"Understand vector addition and scalar multiplication.\",\n          \"resources\": {\n            \"Linear Algebra textbook - Chapter 2\": \"https://web.stanford.edu/~ashishg/msande111/notes/chapter2.pdf\",\n            \"MIT OpenCourseWare - Linear Algebra: Vectors\": \"https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/\"\n          },\n          \"tools\": {\n            \"Graphing software\": \"https://www.desmos.com/calculator\",\n            \"Online vector calculator\": \"https://www.symbolab.com/solver/vector-calculator\"\n          }\n        },\n        {\n          \"stepNumber\": 3,\n          \"description\": \"Learn about vector dot product and cross product.\",\n          \"resources\": {\n            \"Linear Algebra textbook - Chapter 3\": \"http://www.math.iit.edu/~fass/Notes532_Ch3Print.pdf\",\n            \"3Blue1Brown - Essence of Linear Algebra: Dot Products and Duality\": \"https://www.3blue1brown.com/lessons/dot-products\"\n          },\n          \"tools\": {\n            \"Graphing software\": \"https://www.desmos.com/calculator\",\n            \"Online vector calculator\": \"https://www.symbolab.com/solver/vector-calculator\"\n          }\n        }\n      ],\n      \"exercises\": [\n        {\n          \"description\": \"Practice adding and subtracting vectors.\",\n          \"searchTerms\": [\n            \"vector addition practice\",\n            \"vector subtraction exercises\"\n          ]\n        },\n        {\n          \"description\": \"Calculate dot products of vectors.\",\n          \"searchTerms\": [\n            \"dot product exercises\",\n            \"vector dot product practice\"\n          ]\n        },\n        {\n          \"description\": \"Find the cross product of vectors.\",\n          \"searchTerms\": [\n            \"cross product practice\",\n            \"vector cross product exercises\"\n          ]\n        }\n      ]\n    },\n    {\n      \"title\": \"Matrices and Systems of Equations\",\n      \"content\": \"This lesson covers matrices and their applications in solving systems of linear equations.\",\n      \"steps\": [\n        {\n          \"stepNumber\": 1,\n          \"description\": \"Learn about matrix notation and basic operations.\",\n          \"resources\": {\n            \"Linear Algebra textbook - Chapter 4\": \"https://openstax.org/books/college-algebra-2e/pages/4-introduction-to-linear-functions\",\n            \"Khan Academy - Matrices\": \"https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices\"\n          },\n          \"tools\": {\n            \"Graphing calculator\": \"https://www.desmos.com/calculator\",\n            \"Online matrix calculator\": \"https://matrixcalc.org/\"\n          }\n        },\n        {\n          \"stepNumber\": 2,\n          \"description\": \"Understand matrix multiplication and inverses.\",\n          \"resources\": {\n            \"Linear Algebra textbook - Chapter 5\": \"https://www.gradesaver.com/textbooks/math/algebra/linear-algebra-and-its-applications-5th-edition/chapter-5-eigenvalues-and-eigenvectors-5-1-exercises-page-273/1\",\n            \"MIT OpenCourseWare - Linear Algebra: Matrices\": \"https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/\"\n          },\n          \"tools\": {\n            \"Graphing calculator\": \"https://www.desmos.com/calculator\",\n            \"Online matrix calculator\": \"https://matrixcalc.org/\"\n          }\n        },\n        {\n          \"stepNumber\": 3,\n          \"description\": \"Learn about systems of linear equations and Gaussian elimination.\",\n          \"resources\": {\n            \"Linear Algebra textbook - Chapter 6\": \"https://www.scribd.com/document/173385876/Linear-Algebra-Chapter-6-Vector-Spaces-Associated-With-Matrices\",\n            \"3Blue1Brown - Essence of Linear Algebra: Gaussian Elimination\": \"https://www.3blue1brown.com/topics/linear-algebra\"\n          },\n          \"tools\": {\n            \"Graphing calculator\": \"https://www.desmos.com/calculator\",\n            \"Online matrix calculator\": \"https://matrixcalc.org/\"\n          }\n        }\n      ],\n      \"exercises\": [\n        {\n          \"description\": \"Solve systems of linear equations using matrix methods.\",\n          \"searchTerms\": [\n            \"matrix method practice\",\n            \"system of equations exercises\"\n          ]\n        },\n        {\n          \"description\": \"Perform matrix operations - addition, subtraction, multiplication.\",\n          \"searchTerms\": [\n            \"matrix operations practice\",\n            \"matrix arithmetic exercises\"\n          ]\n        },\n        {\n          \"description\": \"Find matrix inverses and solve equations using inverse matrices.\",\n          \"searchTerms\": [\n            \"matrix inverse practice\",\n            \"inverse matrices exercises\"\n          ]\n        }\n      ]\n    }\n  ]\n}\n',
    tools: [{ type: "retrieval" }],
    model: "gpt-4-1106-preview",
});

const thread = await openai.beta.threads.create();

const message = await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: "Artificial Intelligence",
});

const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: assistant.id,
    instructions: "",    
});

console.log(run)

const checkStatusAndPrintMessages = async (threadId, runId) => {
    let runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
    if(runStatus.status === "completed"){
        let messages = await openai.beta.threads.messages.list(threadId);
        messages.data.forEach((msg) => {
            const role = msg.role;
            const content = msg.content[0].text.value; 
            console.log(
                `${role.charAt(0).toUpperCase() + role.slice(1)}: ${content}`
            );
        });
    } else {
        console.log("Run is not completed yet.");
    }  
};

setTimeout(() => {
    checkStatusAndPrintMessages(thread.id, run.id)
}, 60000 );

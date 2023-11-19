import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: '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', // Use environment variable for security
    dangerouslyAllowBrowser: true // Note: This is a security risk when used in client-side code
});

const assistant = await openai.beta.assistants.create({
    name: "Learning Assistant",
    instructions:
    'You are a learning curriculum designer who creates a JSON with a multi-step plan on the best way to learn a provided topic. The JSON should include objects of lesson plans with content, explicit steps, exercises, search terms, and explicitly named resources and tools. Please be sure to put labeled urls in the resources and tools sections. Be sure to elaborate very much on the steps and always provide resources and tools. There should be a good number of lessons in the lesson plan and a good number of steps in each lesson. There should be at least two links for each tools and resources section.\n\nThis is how the json should look, but there should be more lessons, steps, descriptions, resources, tools, and exercises than in this example.\n\n{\n  "topic": "Pixel Art",\n  "lessonPlans": [\n    {\n      "title": "title here",\n      "content": "Lesson description",\n      "steps": [\n        {\n          "stepNumber": 1,\n          "description": "step description",\n          "resources": {\n            "URL name": "various URLS"\n          },\n          "tools":{\n            "URL name": "various URLS"\n          }\n        }\n      ],\n      "exercises": [\n        {\n          "description": "description of exercise",\n          "searchTerms": [\n            "various search terms here"\n          ]\n        }\n      ],\n    }\n  ]\n}',
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

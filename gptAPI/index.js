const { OpenAI } = require("openai");
const fs = require("fs");

const unirest = require("unirest");
const cheerio = require("cheerio");

const getOrganicData = async (prompt) => {
    let terms = prompt.split(" ");
    prompt = terms.join("+");
    let response = await unirest
        .get("https://www.google.com/search?q=" + prompt + "&gl=us&hl=en")
        .headers({
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
        });
    let $ = await cheerio.load(response.body);
    console.log(response.status);
    let titles = [];
    let links = [];
    let snippets = [];
    let displayedLinks = [];

    $(".g .yuRUbf h3").each((i, el) => {
        titles[i] = $(el).text();
    });
    $(".yuRUbf a").each((i, el) => {
        links[i] = $(el).attr("href");
    });
    $(".g .VwiC3b ").each((i, el) => {
        snippets[i] = $(el).text();
    });
    $(".g .yuRUbf .NJjxre .tjvcx").each((i, el) => {
        displayedLinks[i] = $(el).text();
    });

    const organicResults = [];

    for (let i = 0; i < titles.length; i++) {
        organicResults[i] = {
            title: titles[i],
            links: links[i],
            snippet: snippets[i],
            displayedLink: displayedLinks[i],
        };
    }

    // res = await organicResults;
    return organicResults;
};

const role =
    'You are a learning curriculum designer who creates a JSON with a multi-step plan on the best way to learn a provided topic. The JSON should include objects of lesson plans with content, explicit steps, exercises, search terms, and explicitly named resources and tools. No URLS for the resources and tools, only names and titles. Be sure to elaborate very much on the steps and always provide multiple resources and tools for each lesson and step when applicable, but be sure not to repeat resources and tools unless they are nessecary to the particlular step. Make sure the resources and tools are specifically related to the step of the learnign plan aswell. There should be a good number of lessons in the lesson plan and a good number of steps in each lesson.\n\nThis is how the json should look, but there should be more lessons, steps, descriptions, resources, tools, and exercises than is this example\n\nThis is how the json should look, but there should be more lessons, steps, descriptions, resources, tools, and exercises than is this example\n\n{\n  "topic": "Pixel Art",\n  "lessonPlans": [\n    {\n      "title": "title here",\n      "content": "Lesson description",\n      "steps": [\n        {\n          "stepNumber": 1,\n          "description": "step description",\n          "resources": [\n            "resources here"\n          ],\n          "tools":[\n            "various tools here"\n          ]\n        }\n      ],\n      "exercises": [\n        {\n          "description": "description of exercise",\n          "searchTerms": [\n            "various search terms here"\n          ]\n        }\n      ],\n    }\n  ]\n}';

const openai = new OpenAI({
    apiKey: "KEY HERE",
});

async function generate(prompt) {
    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: role },
            {
                role: "user",
                content: prompt,
            },
        ],
        model: "gpt-3.5-turbo",
    });

    await fs.promises.writeFile(
        "out.json",
        completion.choices[0].message.content
    );
}

function scrape() {
    var data = JSON.parse(fs.readFileSync("out.json"));

    async function wrapper() {
        for (let lesson of data.lessonPlans) {
            for (let step of lesson.steps) {
                temp1 = {};
                for (resource of step.resources) {
                    await getOrganicData(resource).then((res) => {
                        temp1[resource] = res[0].links;
                    });
                }
                step.resources = temp1;

                temp2 = {};
                for (tool of step.tools) {
                    await getOrganicData(tool).then((res) => {
                        temp2[tool] = res[0].links;
                    });
                }
                step.tools = temp2;
            }
        }
        fs.writeFile("out.json", JSON.stringify(data), (err) => {
            if (err) throw err;
        });
    }

    wrapper();
}

generate("I want to learn Linear Algebra").then(() => scrape());

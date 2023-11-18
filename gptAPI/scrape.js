const unirest = require("unirest");
const cheerio = require("cheerio");
const fs = require("fs");

const getOrganicData = async (prompt) => {
    let terms = prompt.split(" ");
    prompt = terms.join("+");
    return unirest
        .get("https://www.google.com/search?q=" + prompt + "&gl=us&hl=en")
        .headers({
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
        })
        .then((response) => {
            let $ = cheerio.load(response.body);
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

            const organicResult = [];
            for (let i = 0; i < titles.length; i++) {
                organicResults[i] = {
                    title: titles[i],
                    links: links[i],
                    snippet: snippets[i],
                    displayedLink: displayedLinks[i],
                };
            }
            console.log(organicResult);
        });
    return data;
    // console.log(organicResults);
    // return organicResults;
};

data = getOrganicData("Juggling");
console.log(data);
// async function getResult(prompt) {
//     // let result = await any Promise, like:
//     let result = await Promise.resolve(getOrganicData(prompt));
//     return result;
// }

// var data = JSON.parse(fs.readFileSync("out.json"));

// for (let lesson of data.lessonPlans) {
//     for (let step of lesson.steps) {
//         temp = {};
//         for (let resource of step.resources) {
//             getOrganicData(resource).then((res) => {
//                 console.log(res);
//                 // temp[res[0].title] = res[0].links;
//             });
//         }
//         step.resources = temp;
//     }
// }

// console.log(JSON.stringify(data));

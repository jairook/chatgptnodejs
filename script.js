import { config } from "dotenv"
config()

import OpenAI from "openai";

import readline from "readline";

const openai = new OpenAI({
    apiKey: process.env.API_KEY
});

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

userInterface.prompt()

userInterface.on("line", async input => {
    const res = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ "role": "user", "content": input}]
    })
    console.log(res.choices[0].message)
    userInterface.prompt()
    // .then(res => {
    //     console.log(res.data.choices[0].message.content)
    // })  
})

// openai.createChatCompltion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: "Helo ChatGPT"}]
// }).then(res => {
//     console.log(res.data.choices[0].message.content)
// })


// console.log(process.env.API_KEY)
// Configuration module is no longer applicable
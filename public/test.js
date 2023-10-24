// document.addEventListener("DOMContentLoaded", async function(){

//     const bard = new Bard("ZwjOmnq2h4bCF-eILzj0w1kBWZO2zeE__7YzIHpSQN2kGK1Eosxa6bZxwF1e0rzZaCKi5w.");

//     const response = await bard.ask("who is the first mman to die");

//     console.log(response);

// })



// import Bard from "../node_modules/bard-ai/index.js";

import fetch from "../node_modules/node-fetch/src/index.js";

import Bard from "../node_modules/bard-ai/index.js";

let myBard = new Bard("bAjOmqg_sqEJjQqNc3v38v5ddOkt8CB7lCGqXQhUQ4fEQoWGDt8IpS7xXrXitf96Nuk0Dg.", {
    fetch: fetch
})

const response = await myBard.ask("What is the meaning of life?");

console.log(response);
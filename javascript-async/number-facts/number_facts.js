// // ///////////////////////////////////////1

// const body = document.querySelector("body");
// const url = "http://numbersapi.com/2?json";

// async function numberFact() {
//     const res = await axios.get(url);
//     body.innerText = res.data.text;
// }

// numberFact();

// // //////////////////////////////////////2
// const body = document.querySelector("body");
// const url = "http://numbersapi.com/2..6?json";

// async function numberRangeFacts() {
//     const res = await axios.get(url);
//     for (let num in res.data) {
//         const d = document.createElement("div");
//         d.innerText = res.data[num];
//         body.append(d);
//     }
// }

// numberRangeFacts()

// ///////////////////////////////3
const body = document.querySelector("body");
const url = "http://numbersapi.com/2?json";


async function fourFacts() {
    let numberFacts = [];
    for (let i = 1; i < 5; i++) {
        numberFacts.push(await axios.get(url));
    }
    for (fact in numberFacts) {
        const d = document.createElement("div");
        d.innerText = numberFacts[fact].data.text;
        body.append(d);
    }
}

fourFacts()
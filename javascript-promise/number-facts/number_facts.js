// ///////////////////////////////////////1

const body = document.querySelector("body");
const url = "http://numbersapi.com/2?json";
axios.get(url).then((res) => (body.innerText = res.data.text)).catch((err) => console.log(err));

// //////////////////////////////////////2
const body = document.querySelector("body");
const url = "http://numbersapi.com/2..6?json";
axios
    .get(url)
    .then((res) => {
        for (let num in res.data) {
            const d = document.createElement("div");
            d.innerText = res.data[num];
            body.append(d);
        }
    })
    .catch((err) => console.log(err));

// ///////////////////////////////3
const body = document.querySelector("body");
const url = "http://numbersapi.com/2?json";
let numberFacts = [];

for (let i = 1; i < 5; i++) {
    numberFacts.push(axios.get(url));
}

Promise.all(numberFacts)
    .then((numArr) => {
        numArr.forEach((num) => {
            const d = document.createElement("div");
            d.innerText = num.data.text;
            body.append(d);
        });
    })
    .catch((err) => console.log(err));
// //////////////////1
axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1").then((card) => {
    console.log(`${card.data.cards[0]["value"]} of ${card.data.cards[0]["suit"]}`);
});

// ///////////////////2
axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((deck) => {
        return axios.get(`https://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=2`);
    })
    .then((cards) => {
        for (let card of cards.data.cards) {
            console.log(`${card["value"]} of ${card["suit"]}`);
        }
    });

// /////////////////3

const btn = document.getElementById("draw-card");
const cardImg = document.getElementById("card");
Promise.resolve(newDeck()).then((deck) => {
    btn.addEventListener("click", function drawCard() {
        axios
            .get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
            .then((card) => {
                cardImg.src = card.data.cards[0]["image"];
            })
            .catch(() => {
                btn.removeEventListener("click", drawCard);
                btn.innerText = "No more cards in deck";
            });
    });
});

function newDeck() {
    return new Promise((resolve, reject) => {
        axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then((deck) => {
            resolve(deck.data.deck_id);
        });
    });
}
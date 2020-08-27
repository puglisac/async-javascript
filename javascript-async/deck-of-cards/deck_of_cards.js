// //////////////////1

// async function drawCard() {
//     constres = await axios.get("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
//     console.log(`${res.data.cards[0]["value"]} of ${res.data.cards[0]["suit"]}`)
// }
// drawCard()

// ///////////////////2

// async function draw2Cards() {
//     const deck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")

//     const card1 = await draw(deck.data.deck_id);
//     const card2 = await draw(deck.data.deck_id);
//     console.log(`${card1.data.cards[0]["value"]} of ${card1.data.cards[0]["suit"]}`)
//     console.log(`${card2.data.cards[0]["value"]} of ${card2.data.cards[0]["suit"]}`)

// }

// async function draw(id) {
//     const card = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
//     return card
// }

// draw2Cards()

// /////////////////3

const btn = document.getElementById("draw-card");
const cardImg = document.getElementById("card");


async function newDeck() {
    const deck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    const deckId = deck.data.deck_id;
    btn.addEventListener("click", async function drawCard() {
        try {
            card = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
            cardImg.src = card.data.cards[0]["image"]
        } catch {
            btn.removeEventListener("click", drawCard);
            btn.innerText = "No more cards in deck";
        }
    })
}
newDeck();
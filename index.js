const cards = ["Ada", "Brendan", "Ali"];
function writeCards(cards, celebration){
    for (let i = 0; i <cards.length; i++){
        console.log(`Thank you, ${cards[i]} for the wonderful ${celebration} gift!`);
        debugger;
    } 
    return cards;
}
writeCards(cards, "celebration");


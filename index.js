const cards = ["Guadalupe", "Ollie", "Aki"];
function writeCards(cards, celebration){
    const messages = [];
    for (let i = 0; i <cards.length; i++){
        const singleMessage = `Thank you, ${cards[i]}, for the wonderful ${celebration} gift!`;
        messages.push(singleMessage);
        console.log(messages);
        debugger;
    } 
    return messages;
}
writeCards(cards, "birthday");

function countDown(){
let countDown = 10;
while (countDown >= 0){
    console.log(countDown);
    countDown--;
}
}
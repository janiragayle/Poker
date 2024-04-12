const cards = [];
class Deck{
    constructor(){

        for(let r=1; r<14; r++){
            for(let s=1; s<5; s++){
                const card = new Card(s, r);
                cards.push(card);
            }
        }
    }


    shuffle(){
       let randomIndex = 0;
       
       for(let i = 51; i>= 0; i--){
        randomIndex = Math.floor((Math.random() * i+1) + 1);

        let temp = cards[i];
        cards[i] = cards[randomIndex];
        cards[randomIndex] = temp;
       }
    }

    deal(index){
        
        return cards[index];
    }
};

/*]]
const deck = new Deck();

let i = 51;
while(i >= 0){
    console.log(deck.deal());
    i--;
}
*/

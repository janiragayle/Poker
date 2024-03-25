

class Game {
        
    constructor(testHand){ 
        //testhand constructor
        //takes in set hand from user
        const player = new Player();
        const deck = new Deck();

        for (const inputCard of testHand){
            console.log(inputCard);
            let suit = 0;
            let s = inputCard.charAt(0);

            console.log(s);

            if (s === "c"){
                suit = 1;
                console.log(suit);
            }
            if (s === "d"){
                suit = 2;
                console.log(suit);
            }
            if (s === "h"){
                suit = 3;
                console.log(suit);
            }
            if (s === "s"){
                suit = 4;
                console.log(suit);
            }
    
            let rank = parseInt(inputCard.charAt(1));
            console.log(rank);

            const c = new Card(suit, rank);
            player.addCard(c);
        }
        console.log("This is the first card: " + player.getCard(1));
    }
    
}

const game = new Game(prompt().split(" "));


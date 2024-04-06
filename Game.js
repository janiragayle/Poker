

class Game {
    
    /* //allows you to give user a specific hand to check program is running correctly
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
    */

    constructor(){
        this.player = new Player();
        this.deck = new Deck();
    }


    play(){
        
        const bets = prompt("You have " + this.player.getBankroll() + 
                            " tokens. \n How much do you want to bet?"); //tell player their bankroll

        this.player.bets(bets); //take bet
        this.player.takeBankroll(bets);//subtract bet from bankroll

        console.log("You have " + this.player.getBankroll() 
                    + " tokens remaining"); //tell player remaining bankroll
 
                   
        this.deck.shuffle();//shuffle cards

        let i = 0;
        while (i < 5){//adds 5 random cards to player's hand 
            this.player.addCard(this.deck.deal());
            i = i + 1;
        }

        console.log(`Here is your hand: \n1. ${this.player.getCard(0)}\n2. ${this.player.getCard(1)}\n3. ${this.player.getCard(2)}\n4. ${this.player.getCard(3)}\n5. ${this.player.getCard(4)}`);
        
        for (i=0; i<5; i++){//asks if they want to change any of their cards
            let answer = prompt("Do you want to change #" + (i+1) + " in your hand? \nEnter y/n");

            if(answer === "y"){
                this.dealHand(i);
                console.log("\n");
                console.log(`Here is your hand: \n1. ${this.player.getCard(0)}\n2. ${this.player.getCard(1)}\n3. ${this.player.getCard(2)}\n4. ${this.player.getCard(3)}\n5. ${this.player.getCard(4)}`);
            }
        }
    }
    
    /****************************** HELPER FUNCTIONS *****************************/

    dealHand(index){ 
    //if player chooses to change a card in their hand
    //this method will check if the new card dealt
    //to them already exists in their hand
        this.deck.shuffle();

        const c = this.deck.deal();

        while (c == this.player.getCard()){
            if (c == this.player.getCard()){
                this.deck.shuffle();
            }
        }

        this.player.setCard(index, c);
    }
}

const game = new Game(/*prompt().split(" ")*/).play();


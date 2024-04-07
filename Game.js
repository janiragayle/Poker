

class Game {
    
     //allows you to give user a specific hand to check program is running correctly
    constructor(testHand){ 
        //testhand constructor
        //takes in set hand from user
        this.player = new Player();
        this.deck = new Deck();

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
            this.player.addCard(c);
        }
        console.log("This is the first card: " + this.player.getCard(1));
    }
    

    /*
    constructor(){
        this.player = new Player();
        this.deck = new Deck();
    }
    */

    play(){
        
        const bets = prompt("You have " + this.player.getBankroll() + 
                            " tokens. \n How much do you want to bet?"); //tell player their bankroll

        this.player.bets(bets); //take bet
        this.player.takeBankroll(bets);//subtract bet from bankroll

        console.log("You have " + this.player.getBankroll() 
                    + " tokens remaining"); //tell player remaining bankroll
 
        /*           
        this.deck.shuffle();//shuffle cards

        let i = 0;
        while (i < 5){//adds 5 random cards to player's hand 
            this.player.addCard(this.deck.deal());
            i = i + 1;
        }
        
        console.log(`Here is your hand: \n1. ${this.player.getCard(0)}\n2. ${this.player.getCard(1)}\n3. ${this.player.getCard(2)}\n4. ${this.player.getCard(3)}\n5. ${this.player.getCard(4)}`);
        
        for (let i=0; i<5; i++){//asks if they want to change any of their cards
            let answer = prompt("Do you want to change #" + (i+1) + " in your hand? \nEnter y/n");

            if(answer === "y"){
                this.dealHand(i);
                console.log("\n");
                console.log(`Here is your hand: \n1. ${this.player.getCard(0)}\n2. ${this.player.getCard(1)}\n3. ${this.player.getCard(2)}\n4. ${this.player.getCard(3)}\n5. ${this.player.getCard(4)}`);
            }
        }
        */

        const playersHand = [];

        for(let i=0; i<5; i++){
            playersHand.push(this.player.getCard(i));
        }

        console.log(this.checkHand(playersHand));

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

    checkHand(playersHand){
        playersHand.sort(function(card1, card2){
            if(card1.rank > card2.rank){
                return 1;
    
            }else if(card1.rank < card2.rank){
                return -1;
    
            }else{
                if (card1.suit > card2.suit){
                    return 1;
    
                }else if (card1.suit < card2.rank){
                    return -1;
                }
                else{
                    return 0;
                }
            }
        });

        if (this.consecutive(playersHand) === 1 || this.consecutive(playersHand) === 2){
            return "Straight";
        }

        console.log(playersHand);
    }

    consecutive(playersHand){
        let con = 0; 

        if (playersHand[0].getRank() == 1 && playersHand[1].getRank() == 10){
            for (let i=1; i<4; i++){
                if (playersHand[i].getRank()+1 == playersHand[i+1].getRank()){
                    con += 1;
                }
            }
        }else{
            for (let i=0; i<4; i++){
                if (playersHand[i].getRank()+1 == playersHand[i+1].getRank()){
                    con += 2;
                }
            }
        }

        if (con === 3){
            return 1;//royal flush or straight flush or straight
        }else if (con == 8){
            return 2;//straight flush or straight
        }else{
            return 0;//not consecutive
        }
    }

}

const game = new Game(prompt().split(" ")).play();


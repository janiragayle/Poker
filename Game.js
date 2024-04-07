

class Game {
    
     //allows you to give user a specific hand to check program is running correctly
    constructor(testHand){ 
        //testhand constructor
        //takes in set hand from user
        this.player = new Player();
        this.deck = new Deck();

        for (const inputCard of testHand){
            //console.log(inputCard);
            let suit = 0;
            let s = inputCard.charAt(0);

            //console.log(s);

            if (s === "c"){
                suit = 1;
                //console.log("This is the suit: " + suit);
            }
            if (s === "d"){
                suit = 2;
                //console.log("This is the suit: " + suit);
            }
            if (s === "h"){
                suit = 3;
                //console.log("This is the suit: " + suit);
            }
            if (s === "s"){
                suit = 4;
                //console.log("This is the suit: " + suit);
            }
    
            let rank = parseInt(inputCard.substring(1,3));
            //console.log("This is the rank: " + rank);

            const c = new Card(suit, rank);
            this.player.addCard(c);
        }
        /*
        console.log("This is the 1st card: " + this.player.getCard(0));
        console.log("This is the 2nd card: " + this.player.getCard(1));
        console.log("This is the 3rd card: " + this.player.getCard(2));
        console.log("This is the 4th card: " + this.player.getCard(3));
        console.log("This is the 5th card: " + this.player.getCard(4));
        */
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

        console.log(playersHand);

        if (this.consecutive(playersHand) === 1 && this.flush(playersHand) == true){
            return "Royal FLush";

        } else if (this.consecutive(playersHand) === 2 && this.flush(playersHand) == true){
            return "Straight Flush";

        } else if (this.fourKind(playersHand) === true){
            return "Four of a Kind";

        } else if (this.full(playersHand) === true){
            return "Full House";

        } else if (this.consecutive(playersHand) === 0 && this.flush(playersHand) == true){
            return "Flush";

        } else if (this.consecutive(playersHand) === 2 && this.flush(playersHand) == false || this.consecutive(playersHand) === 1 && this.flush(playersHand) == false){
            return "Straight";

        }    

        
    }

    consecutive(playersHand){ //checks if cards are in consec order
        let con = 0; 

        //checks for royal flush
        if (playersHand[0].getRank() == 1 && playersHand[1].getRank() == 10){
            for (let i=1; i<4; i++){
                if (playersHand[i].getRank()+1 == playersHand[i+1].getRank()){
                    con += 1;
                }
            }
        //checks for straight or straight flush
        }else{
            for (let i=0; i<4; i++){
                if (playersHand[i].getRank()+1 == playersHand[i+1].getRank()){
                    con += 2;
                }
            }
        }

        if (con === 3){
            return 1;//royal flush or straight flush or straight
        }else if (con === 8){
            return 2;//straight flush or straight
        }else{
            return 0;//not consecutive
        }
    }

    flush(playersHand){ //checks if all the suits are the same
        let match = 0;

        for (let i=0; i<4; i++){
            if(playersHand[i].getSuit() === playersHand[i+1].getSuit()){
                match +=1;
            }
        }

        if(match === 4)
            return true;
        else
            return false;
    }

    full(playersHand){ //checks for 2 of one rank and three of another rank
        //example: 2 2 4 4 4
        if(playersHand[0].getRank() === playersHand[1].getRank() 
            && playersHand[2].getRank() === playersHand[3].getRank() 
            && playersHand[3].getRank() === playersHand[4].getRank()){
            return true;
        }
        //example: 2 2 2 4 4
        else if (playersHand[0].getRank() === playersHand[1].getRank() 
        && playersHand[1].getRank() === playersHand[2].getRank() 
        && playersHand[3].getRank() === playersHand[4].getRank()){
            return true;
        }
        else{
            return false;
        }
    }
    
    fourKind(playersHand){ //checks for four with the same rank
        //example 2 2 2 2 4
        if(playersHand[0].getRank() === playersHand[1].getRank() 
        && playersHand[1].getRank() === playersHand[2].getRank() 
        && playersHand[2].getRank() === playersHand[3].getRank()){
            return true;

        }
        //example 4 5 5 5 5
        else if(playersHand[1].getRank() === playersHand[2].getRank() 
        && playersHand[2].getRank() === playersHand[3].getRank() 
        && playersHand[3].getRank() === playersHand[4].getRank()){
            return true;

        } 
        else{
            return false;
        }
    }

}

const game = new Game(prompt().split(" ")).play();


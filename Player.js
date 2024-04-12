class Player {
    
    constructor(){
        this.hand = [];
        this.bankroll = 50;
        this.bet = 0;  
    }

    addCard(c){ //adds card c to player's hand
        this.hand.push(c);
    }

    setCard(index, c){ //sets the card at the given index to card c
        this.hand[index] = c;
    }

    bets(amt){ //sets bet to players bet
        this.bet = amt;
    }

    adjustBankroll(odds){ // adjusts player's winnings to bankroll
        this.bankroll += odds;
    }

    getBankroll(){ //returns balance of bankroll
        return this.bankroll;
    }

    takeBankroll(b){ //removes bets from player's bankroll
        return this.bankroll -= b;
    }

    getBet(){ //returns player's bet
        return this.bet;
    }

    getCard(index){ //returns card at given index
        return this.hand[index];
    }

    getHand(){ //returns entire hand
        return this.hand;
    }
    
    clearHand(){ //clears entire hand for another round
        let i = 5;
        while (i != 0){
            this.hand.shift();
            i--;
        }
    }

}

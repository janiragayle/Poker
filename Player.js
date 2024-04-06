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
        this.hand.splice(index, 0, c);
    }
    
    removeCard(c){ // removes card c from player's hand
        this.hand.splice(c);
    }

    bets(amt){ //sets bet to players bet
        this.bet = amt;
    }

    winnings(odds){ // adjusts player's winnings to bankroll
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

    getCard(c){ //may be wrong
        return this.hand[c];
    }
}

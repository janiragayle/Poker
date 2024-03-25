class Player {
    
    constructor(){
        this.hand = [];
        this.bankroll = 5;
        this.bet = 0;  
    }

    addCard(c){
        this.hand.push(c);
    }

    setCard(index, c){
        this.hand.splice(index, 0, c);
    }
    
    removeCard(c){
        this.hand.splice(c);
    }

    bets(amt){
        this.bet = amt;
    }

    winnings(odds){
        this.bankrolls += odds;
    }

    getBankroll(){
        return this.bankroll;
    }

    getBet(){
        return this.bet;
    }

    getCard(c){ //may be wrong
        return this.hand[c];
    }
}

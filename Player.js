
class Player{
    
    constructor(){
        const hand = [];
        let bankroll = 5;
        let bet = 0;  
    }

    addCard(c){
        hand.push(c);
    }

    setCard(index, c){
        hand.splice(index, 0, c);
    }
    
    removeCard(c){
        hand.splice(c);
    }

    bets(amt){
        bet = amt;
    }

    winnings(odds){
        bankrolls += odds;
    }

    getBankroll(){
        return this.bankroll;
    }

    getBet(){
        return this.bet;
    }

    getCard(c){ //may be wrong
        return hand[c];
    }
}

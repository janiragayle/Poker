class Card {

    static suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    static ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    
    constructor(s, r){
        this.suit = s;
        this.rank = r;
    }




    toString(){
        return Card.ranks[this.rank-1] + " of " + Card.suits[this.suit-1];
    }

    getRank(){
        return this.rank;
    }

    getSuit(){
        return this.suit;
    }
}

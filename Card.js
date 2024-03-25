class Card {
    constructor(s, r){
        this.suit = s;
        this.rank = r;
        const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        const ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    }


    //compareTo function 

    toString(){
        return ranks[rank-1] + " of " + suits[suit - 1];
    }

    getRank(){
        return this.rank;
    }

    getSuit(){
        return this.suit;
    }
}

// Make your card constructor again here, but make sure to use private
// variables!
function Card(n,s) {
    var number = n;
    var suit = s;
    //getters
    this.getNumber = function(){
        return number;
    };
    this.getSuit = function(){
        return suit;
    };
    this.getValue = function(){
        if (number > 10 || number === 0){
            return 10;
        } else if (number === 1){
            return 11;
        } else{
            return number;
        }
    };
}

var Hand = function() {
    var card1 = deal();
    var card2 = deal();
    this.score = function(){
       return card1.getValue() + card2.getValue();  
    };
};

// Make a deal function here.  It should return a new card with a suit
// that is a random number from 1 to 4, and a number that is a random
// number between 1 and 13
var deal = function(){
    var randNum = Math.floor(Math.random() * 13) + 1;
    var randSuit = Math.floor(Math.random() * 4) + 1;
    //the card
    return new Card(randNum, randSuit);
};

var myHand = new Hand();
var yourHand = new Hand();

console.log("I scored a "+myHand.score()+" and you scored a "+ yourHand.score());

if (yourHand.score() > myHand.score())
    console.log("you win!");
else if(yourHand.score() < myHand.score())
    console.log("I win!");
else
    console.log("We tied!");


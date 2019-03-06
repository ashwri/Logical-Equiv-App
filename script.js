
//class Node {
//    constructor(data, children) {
//        this.data = data;
//        this.children = children;
//    }
//}

//class PropTree {
//    constructor() {
//        this.root = null;
//    }
//    add(data) {

//    }
//}
/*
 * 1 : Identity
 * 2 : Universal Bound  
 * 3 : Idempotent<button
 * 4 : Commutative
 * 5 : Associative
 * 6 : Absorption
 * 7 : Distributive
 * 8 : Negation
 * 9 : Double Negation
 * 10: DeMorgan's
 * 11: Defn of XOR
 * 12: Defn of ->
 * 13: Contrapositive
 */
function Node(value, numOfChildren, children, level, option) {
    this.value = value;
    this.children = [];
    this.numOfChildren = numOfChildren;
    for (var i = 0; i < children.length; i++) {
        this.children[i] = children[i];
    }
    this.level = level;
    this.option = option;
}


var a = new Node("q -> p", 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 4, "a");
var b = new Node("~q v p", 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, a, 0], 3, "a");
var c = new Node("p v ~q", 1, [0, 0, 0, 0, 0, b, 0, 0, 0, 0, 0, 0, 0, 0], 2, "a");
var c1 = new Node("~q v ~(~p)", 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, b, 0, 0, 0, 0], 2, "b");
var d = new Node("~(~p) v ~q", 2, [0, 0, 0, 0, 0, c1, 0, 0, 0, c, 0, 0, 0, 0], 1, "a")
var e = new Node("~p -> ~q", 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, d, 0], 0, "a");

var curr;
var numOfCorrect = 0;

//TODO: Figure out a way to save the state allowing students to save progress in a question and move on to next
//TODO: How can I get different questions?

function reply_click(clicked_id) {
    var selection = clicked_id % 100;
    var questionNum = (clicked_id / 100).toFixed();
    //until I figur eout a better way to get the questions 
    switch (questionNum) {
        case '1':
            curr = e.children;
         
    }
    //----------------------------------------------------//
    
    if (curr[selection]) {
        //notify user that selection is correct
        //show the correct line
        numOfCorrect++;

        var lineNum = questionNum + "-" + numOfCorrect + curr[selection].option;
        var line = document.getElementById(lineNum);
        line.className += " visible";
        // go to that subtree
        if (curr[selection].numOfChildren == 0) {
            // this is the final answer
            //notify user that answer is correct and questionis complete
            numOfCorrect = 0;
        } else {
            curr = curr[selection].children;
        }
      
    } else {
        //notify user that selection was incorrect
        alert("I am sorry, this is not the correct choice.");
    }
    
}
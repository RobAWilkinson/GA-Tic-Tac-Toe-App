// IIFE
(function() {

  angular
    .module("myApp",[])
    .controller("tictactoeController", tictactoeController);

// Controller
  function tictactoeController() {

// Capture Variable
    var self = this;
    var hasMoves = false;
    self.currentTurn = '';
    self.playerOne = 'X';
    self.playerTwo = 'O';
    self.winner = '';

// Gameboard
    self.boxes = [
      {square: 1},{square: 2},{square: 3},
      {square: 4},{square: 5},{square: 6},
      {square: 7},{square: 8},{square: 9},
    ];

// Picks Random Player To Be X or O
    self.random = function () {
     if(Math.random() > 0.5) {
      alert("Player One GO!");
      self.currentTurn = "X";
     } else {
      alert("Player Two GO!");
      self.currentTurn = "O";
     }
    };

    self.random();

// Clickbox Function
    self.clickbox = function($index) {
      //console.log(self.boxes[$index].value + "check");
      if(self.boxes[$index].value === undefined) {
        self.boxes[$index].value = self.currentTurn;
        self.boxes[$index].square = self.currentTurn;
          if(self.currentTurn === "X") {
            self.currentTurn = "O";
          } else {
            self.currentTurn = "X";
          }
          } else {
            alert("Already Taken! Choose Another Square!");
        }


// Check for winner after each click
          self.winner(self.boxes[$index].value);
};
//       self.boxes.forEach(function(box, index) {
//         if(box.square != self.playerOne && box.square != self.playerTwo) {
//           hasMoves = true;
//     }
//  else if(! hasMoves) {
//     alert  ("No more moves!");
// }
//     });

// Winner Fucntion
    self.winner = function(input) {

  // Row Wins
      if((self.boxes[0].square == input && self.boxes[1].square == input && self.boxes[2].square == input) || (self.boxes[3].square == input && self.boxes[4].square == input && self.boxes[5].square == input) || (self.boxes[6].square == input && self.boxes[7].square == input && self.boxes[8].square == input))  {
        alert (input + " WINS!");

  // Column Wins
      } else if ((self.boxes[0].square == input && self.boxes[3].square == input && self.boxes[6].square == input) || (self.boxes[1].square == input && self.boxes[4].square == input && self.boxes[7].square == input) || (self.boxes[2].square == input && self.boxes[5].square == input && self.boxes[8].square == input)) {
        alert (input + " WINS!");

  // Diagonal Wins
      } else if ((self.boxes[0].square == input && self.boxes[4].square == input && self.boxes[8].square == input) || (self.boxes[2].square == input && self.boxes[4].square == input && self.boxes[6].square == input)) {
        alert  (input + " WINS!");


  // No Winner
      }
};

  // Reset Game Button
    self.resetbtn = function() {
      self.boxes.forEach(function(box, index) {
        self.boxes[index].value = ' ';
        self.boxes[index].square = index;
      });

    };
}


})();
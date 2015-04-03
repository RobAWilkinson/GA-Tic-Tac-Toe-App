(function() {

  angular
    .module("myApp",[])
    .controller("tictactoeController", tictactoeController);

  function tictactoeController() {

    var self = this;
    self.currentTurn = '';
    self.playerOne = 'X';
    self.playerTwo = 'O';
    self.winner = '';
    // self.resetbtn = "";
    self.boxes = [
      {square: 1},{square: 2},{square: 3},
      {square: 4},{square: 5},{square: 6},
      {square: 7},{square: 8},{square: 9},
    ];

      self.random = function () {
      if(Math.random() > 0.5) {
        console.log("Player One GO!");
        self.currentTurn = "X";
      } else {
        console.log("Player Two GO!");
          self.currentTurn = "O";
      }
    };
    self.random();


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
          }
          else {
          console.log("Already Taken! Choose Another Square!");
          }
          self.winner();
          // console.log(self.boxes[$index]);
          // console.log(self.boxes[$index].square);
    };


    self.winner = function() {
      if(self.boxes[0].square == "X" && self.boxes[1].square == "X" && self.boxes[2].square == "X") {
        alert ("X WINS!");
      } else if (self.boxes[3].square == "X" && self.boxes[4].square == "X" && self.boxes[5].square == "X") {
        alert  ("X WINS!");
      } else if (self.boxes[6].square == "X" && self.boxes[7].square == "X" && self.boxes[8].square == "X" ){
        alert  ("X WINS!");
      } else if (self.boxes[1].square == "X" && self.boxes[4].square == "X" && self.boxes[8].square == "X" ){
        alert  ("X WINS!");
      } else if (self.boxes[0].square == "O" && self.boxes[1].square == "O" && self.boxes[2].square == "O" ){
        alert  ("O WINS!");
      } else if (self.boxes[3].square == "O" && self.boxes[4].square == "O" && self.boxes[5].square == "O" ){
        alert  ("O WINS!");
      } else if (self.boxes[6].square == "O" && self.boxes[7].square == "O" && self.boxes[8].square == "O" ){
        alert  ("O WINS!");
      } else if (self.boxes[1].square == "O" && self.boxes[4].square == "O" && self.boxes[8].square == "O" ){
        alert  ("O WINS!");
      }


    // self.resetbtn = function() {
    //   console.log("hello");
    // };
    // var a;
    // var b;
    // var c;
    // if(a === b && a ==c && b ==c && a != null)
    //   return a;

  };

}


})();
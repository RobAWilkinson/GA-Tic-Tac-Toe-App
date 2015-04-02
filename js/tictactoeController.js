(function() {

  angular
    .module("myApp",[])
    .controller("tictactoeController", tictactoeController);

  function tictactoeController() {

    var self = this;
    self.currentTurn = "";
    self.playerOne = 'X';
    self.playerTwo = 'O';
    self.playerMove = null;
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
      if(self.boxes[$index].value === undefined) {
        self.boxes[$index].value = self.currentTurn;
          if(self.currentTurn === "X") {
            self.currentTurn = "O";
            } else {
            self.currentTurn = "X";
            }
          } else {
          console.log("Already Taken! Choose Another Square!");
          }
          console.log(self.boxes[$index]);
    };

    self.playerMove = function() {


    };



    self.winner = function() {

    };

    self.resetbtn = function() {
      console.log("hello");
    };


  }




})();
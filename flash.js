// var inquirer = require("inquirer");
var BasicCard = require('./BasicCard');
var fs = require("fs");

var command = process.argv[2];
var frontCard = process.argv[3];
var backCard = process.argv[4];

// for (var i = 2; i < userInputs.length; i++){
//     input = input + " " + userInputs[i];
// };

if (command == "newQuestion"){
    newQuestion(frontCard, backCard);
} else {
    console.log("Error")
};

function getData () {
    fs.readFile("log.txt", "utf8", function(error, data) {
      console.log(data);
    });
};
var Basic = new BasicCard();


function newQuestion (front, back) {
    var Basic = new BasicCard(frontCard, backCard);
    var logTxt = `\nfront: ${front}
    back: ${back} `;
    fs.appendFile("log.txt", logTxt);
};
var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;

console.log(chalk.cyan("Welcom to The Mankhurd Quiz"));

function play(question, answer) {
  userAns = readlineSync.question(question);
  if (answer == userAns) {
    console.log(chalk.green("you are correct"));
    score = score + 1;
  } else {
    console.log(chalk.red("you are wrong"));
  }
  console.log(chalk.yellow(score));
  console.log("-----------------------");
}

questions = [
  {
    que: "what is pincode of mankhurd? ",
    ans: "400043",
  },
  {
    que: "name the famous sweet shop name?",
    ans: "madhuram",
  },
  {
    que: "is there any mall in mankhurd like d-mart?",
    ans: "no",
  },
  {
    que: "how many total platforms are there for local train in mankhurd?",
    ans: "3",
  },
  { que: "how many petrol pumps are there in mankhurd? ", ans: "0" },
];

console.log("Total ques : " + questions.length);
for (var i = 0; i < 4; i++) {
  play(questions[i].que, questions[i].ans);
}

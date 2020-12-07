var readlineSync=require("readline-sync"); 
const chalk=require("chalk");
var score=0;
var userName=readlineSync.question("what is your name?\n");
console.log(chalk.bold.blue("welcome! ")+ chalk.bgBlue( userName )+ " \nlet's see how good are you at "+ chalk.bgRed("ONE WORD SUBSTITUTION?"));



function play(question,answer){
   var userAnswer=readlineSync.question(i+1 +". "+(question));
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log(chalk.green("right!"));
    score+=1;
  }
  else
  {
    console.log(chalk.red("wrong!"));
  }
  console.log(chalk.bgBlue("current score: "+ score+" "));
  console.log('-----------------');

}
var highScore=[{
  name: "kamal",
  score:"8"
},
{name: "tushar",
score: "7"}
];


var quiz=[{
  question: "One who does not believe in the existence of God: \n",
  answer: "atheist"
},
 {
  question: "Writing of one's own life story:\n",
  answer: "autobiography"
},
 {
  question:"An individual who is unable to express or interact easily:\n",
  answer: "introvert"
}
,
{
  question:"A stream of water moving very fast:\n",
  answer: "torrent"
},
{
  question:"It is impossible to see through it:\n",
  answer: "opaque"
},
{
  question:"That which cannot be defeated:\n",
  answer: "invincible"
},
{
  question:"	That which can be easily broken:\n",
  answer: "fragile"
},
{
  question:"A place where weapons are manufactured and stored:\n",
  answer: "arsenal"
}
];
for(var i=0;i<quiz.length;i++){
  var currentquestion=quiz[i];
  play(currentquestion.question,currentquestion.answer); 
}
console.log("YAY!! Your FINAL score: "+ score);
console.log("checkout the highscores: ");
for(var j=0;j<highScore.length;j++)
{
  console.log(highScore[j]);
}


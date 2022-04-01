//do You know me
Questions = [
  {
    question: "Am i older than 25 or not? ",
    answer: "yes"
  },
  {
    question: "Who is my favorite Hero? ",
    answer: "maheshbabu"
  },
  {
    question: "Where do i live? ",
    answer: "hyderabad"
  },
  {  
   question: "What is my favorite sweet? ",
    answer: "Gulabjamoon"
  }
];

highScores = [{
  name: "phani",
  score: 4
},
{
  name: "shrilu",
  score: 3            
}
];

var readlinesync = require('readline-sync');
var userName = readlinesync.question("What's Your Name: ");
console.log("Hi " +userName +"," +" Welcome to Do you know me Quiz");

score = 0;
function playQuiz(questions){
  for (let q=0; q<Questions.length; q++){
    userAnswer = readlinesync.question(questions[q].question)
    if(userAnswer.toUpperCase() === questions[q].answer.toUpperCase()){
      console.log("Yes, You were correct");
      score = score+1
    }
    else{
      console.log("Sorry, You were wrong");
    }

  }
        console.log("Your Score is: ", score);

}

function highScore(details){
      console.log("Here's the high score details");

  for (let i in details){
    console.log("High Scorer Name: ",details[i].name);
    console.log("Score: ", details[i].score);
  }
}

playQuiz(Questions);
console.log("after fun")
highScore(highScores);



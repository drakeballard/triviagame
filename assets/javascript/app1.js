//start button function
$("#start").on('click', function(){
  $("#subwrapper").remove();
})

//questions array
var questions = [{
  question: "Who has the most wins as a head coach in the NFL?",
  answers: ["George Halas", "Curly Lambeau", "Tom Landry", "Don Shula"],
  correct: "Don Shula"
}, {    //
  question: "Which NFL team features a helmet decal only on one side of the helmet?",
  answers: ["Houston Texans", "Jacksonville Jaguars", "Pittsburgh Steelers", "Tennessee Titans"],
  correct: "Pittsburgh Steelers"
}, {    //
  question: "Who is the last non-quarterback to win NFL MVP?",
  answers: ["Shaun Alexander", "Ray Lewis", "Adrian Peterson", "LaDainian Tomlinson"],
  correct: "Adrian Peterson"
}, {    //
  question: "This current NFL quarterback, a 2010 Pro Bowler, never started a game at QB in college?",
  answers: ["Matt Schaub", "Matt Cassel", "Matt Moore"," Matt Flynn"],
  correct: "Matt Cassel"
}, {    //
  question: "How many Heisman Trophy winners have gone on to be MVP of the Super Bowl?",
  answers: ["2","3","4","5"],
  correct: "4"
}, {    //
  question: "4 of the first 5 picks in the 1989 draft -- Troy Aikman, Barry Sanders, Derrick Thomas and Deion Sanders -- are in the Hall of Fame. Who was the bust?",
  answers: ["Aundray Bruce", "Blair Thomas", "Keith McCants", "Tony Mandarich"],
  correct: "Tony Mandarich"
}];

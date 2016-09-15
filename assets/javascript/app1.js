//start button function
$("#start").on('click', function(){
  game.start();
})

//questions array = 6 total
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

//creating objects
var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function(){
    game.counter--;
    //The actual counter ID still needs to be added
    $('#counter').html(game.counter);
    if(game.counter<=0){
      console.log("time is up!");
      //not created yet
      game.done();
    }
  },

  //after inital click, the start button will be removed
  //as start is clicked the timer will begin

  start: function(){
    timer = setInterval(game.countdown, 1000);
    // timer = setInterval(game.countown,1000);
    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds </h2>');
    $("#start").remove();
    //using a for loop
    for(var i=0;i<questions.length;i++){
      $("#subwrapper").append("<h2>"+questions[i].question+"</h2>");
      for(var j=0;j<questions[i].answers.length;j++){
        $("#subwrapper").append("<input type='radio' name='question-"+i+" ' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
  }
}
}

}

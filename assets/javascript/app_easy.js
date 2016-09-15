//starting the game when clicking the "start" button

$('#start').on('click',function(){
  // $('#subwrapper').remove();

})

$(document).on('click', '#end',function(){
  game.done();
})

//questions need to go here.
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

// need to apply some game structure, such as correct , incorrect and the initial timer.
var game = {
  correct: 0,
  incorrect:0,
  counter:60,
  countdown: function(){
    //descending
    game.counter--;
    $('#counter').html(game.counter);
    if(game.counter<=0){
      console.log("Time's up man!");
      game.done();
    }
  };
//
  start: function(){
      timer = setInterval(game.countdown,1000);
      $('#subwrapper').prepend('<h2> Time Left: <span id="counter">60</span>Seconds</h2>');
      $('#start').remove();
        for(var i=0; i<questions.length; i++){
          $('#subwrapper').append('<h2>' +questions[i].question+ '</h2>');
          for(var x=0; x<questions[i].answers.length;x++){
            $('#subwrapper').append("<input type='radio' name= 'questions-"+i+"' value=' "+questions[i].answers[x]+"'>" +questions[i].answers[x]);
          }
        }
        $('#subwrapper').append('<br><button id="end">DONE</button>');
  },

  done: function(){
    $.each($("input[name='questions-0]':checked"),function(){
      if($(this).val()==questions[0].correct){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='questions-1]':checked"),function(){
      if($(this).val()==questions[1].correct){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='questions-2]':checked"),function(){
      if($(this).val()==questions[2].correct){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='questions-3]':checked"),function(){
      if($(this).val()==questions[3].correct){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='questions-4]':checked"),function(){
      if($(this).val()==questions[4].correct){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='questions-5]':checked"),function(){
      if($(this).val()==questions[5].correct){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
    },
    result: function(){
      clearInterval(timer);
      $('#subwrapper h2').remove();

      $('#subwrapper').html("<h2>All Done man!</h2>");
      $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
      $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
      $('#subwrapper').append("<h3>Not Answered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
});

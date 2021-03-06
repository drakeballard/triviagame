 $('#start').on('click', function() {
   game.start();
 })

$(document).on('click','#end', function() {
  game.done();
})

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


 var game = {
   correct: 0,
   incorrect:0,
   counter:90,
   countdown: function() {
     //descending
     game.counter--;
     $('#counter').html(game.counter);
     if(game.counter<=0) {
       console.log("Time's up man!");
       game.done();
     }
   },
   start: function(){
     timer = setInterval(game.countdown,1000);
     $('#subwrapper').prepend('<h3> Time Reamining: <span id="counter">90</span> Seconds</h3>');
     $('#start').remove();
      for(var i=0; i<questions.length;i++){
        $('#subwrapper').append('<h3>'+questions[i].question+'</h3>');
        for(var j=0;j<questions[i].answers.length;j++){
          $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
        }
      }
      $('#subwrapper').append('<br><button id="end">DONE</button>')
    },
    done: function() {
      $.each($("input[name='question-0']:checked"), function() {
        if($(this).val()==questions[0].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-1']:checked"), function() {
        if($(this).val()==questions[1].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-2']:checked"), function() {
        if($(this).val()==questions[2].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-3']:checked"), function() {
        if($(this).val()==questions[3].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-4']:checked"), function() {
        if($(this).val()==questions[4].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-5']:checked"), function() {
        if($(this).val()==questions[5].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });
      this.result();
    },
    result: function() {
      clearInterval(timer);
      $('#subwrapper h3').remove();

      $('#subwrapper').html("<h3> All Done!!!</h3>");
      $('#subwrapper').append("<h3> Correct Answers: " +this.correct+"</h3>");
      $('#subwrapper').append("<h3> Incorrect Answers: " +this.incorrect+"</h3>");
      $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
  }

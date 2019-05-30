$("#startButton").on("click", function() {
  play.start();
})

$(document).on("click", "#submit", function(){
  play.done();
})


var questions = [{
  question: " 1. How many states are there in the United States of America?", 
  answers: 
  ["  40  ",
   "  48  ", 
   "  52  ", 
   "  50  "],
  correctAnswer: "  50  "
  }, 
  {
  question: " 2. What disgusting insect, often black or brown, can live up to two weeks with its head cut off?", 
  answers: 
  ["  Spider  ", 
  "  Cockroach  ", 
  "  Grasshopper  ", 
  "  Fly  "],
  correctAnswer: "  Cockroach  "
  }, 
  {
  question: "3. Cassie has 20 oranges. She gave 3 away to her best friend Jim. How many oranges would Jim have left if he ate one?", 
  answers: 
  ["  1  ",
   "  2  ", 
   "  18  ", 
   "  17  "], 
  correctAnswer: "  2  "
  }, 
  {
  question: "4. How many kings would you find in a standard deck of playing cards?",
  answers: 
  ["  6  ", 
  "  8  ", 
  "  2  ", 
  "  4  "],
  correctAnswer: "  4  "
  }, 
  {
  question: "5. John has to be at school by 8:00 a.m. If it takes him 30 minutes to walk to school, at what time should he leave?", 
  answers: 
  ["  7am  ", 
  "  7:30am  ", 
  "  7:15am  ", 
  "  7:45am  "],
  correctAnswer: "  7:30am  "
  }, 
  {
  question: "6. Raised by his Uncle Ben and Aunt May, Peter Parker is the secret identity of which superhero?", 
  answers: 
  ["  Robin  ",
   "  Spider-man  ", 
   "  Superman  ", 
   "  Batman  "],
  correctAnswer: "  Spider-man  "
  }, {
  question: "7. A tennis ball is typically which color?",
  answers: 
  ["  Green  ", 
  "  Black  ", 
  "  Yellow  ", 
  "  Blue  "],
  correctAnswer: "  Yellow  "
  }, {
  question: "8. The acronym DIY stands for Do It ___?",
  answers: 
  ["  Yesterday  ",
   "  Yourself  ", 
   "  Yonder  ", 
   "  Yearly  "],
  correctAnswer: "  Yourself  "
  }, {
  question: "9. In the game of Basketball, how many players from each team are on the court at one time?",
  answers: 
  ["  4  ", 
  "  5  ", 
  "  8  ", 
  "  6  "],
  correctAnswer: "  5  "
  }, {
  question: "10. In which of these sports would you wear a helmet?", 
  answers: 
  ["  Ice Hockey  ",
   "  Tennis  ", 
   "  Volleyball  ", 
   "  Golf  "],
  correctAnswer: "  Ice Hockey  "
  }
  ];

  var play = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function() {
      play.counter--;
      $("#counter").html(play.counter);
      if(play.counter<=0){
        console.log("Time is up");
        play.done();
      }
    },
    start: function() {
      timer = setInterval(play.countdown, 1000);
      $("#content1").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
        $("#startButton").remove();
    for (var i=0; i < questions.length; i++)
   
    {
    $("#content1").append("<h3>"+questions[i].question+"</h3>");
    for (var j=0; j < questions[i].answers.length; j++) {
     var answer = questions[i].answers[j];
      $("#content1").append("<input type='radio' name='question-"+i+"' value='" +answer + "'>"+questions[i].answers[j]);
  }
};


     $("#content1").append("<br><br><button class='btn btn-warning' id='submit'>SUBMIT</button>");
     $("#content1").hide();
     $("#content1").slideDown(3000);
    }, 
    done: function() {
      $.each($("input[name='question-0']:checked"), function(){
        if($(this).val() == questions[0].correctAnswer) {
          play.correct++;
          } else {
            play.incorrect++;
          }
      });
      $.each($("input[name='question-1']:checked"), function(){
        if($(this).val() == questions[1].correctAnswer) {
        play.correct++;
        } else {
          play.incorrect++;
        }
      });
      $.each($("input[name='question-2']:checked"), function(){
        if($(this).val() == questions[2].correctAnswer) {
        play.correct++;
        } else {
          play.incorrect++; 
        }
      });
      $.each($("input[name='question-3']:checked"), function(){
        if($(this).val() == questions[3].correctAnswer) {
        play.correct++;
        } else {
          play.incorrect++;
        }
      });
      $.each($("input[name='question-4']:checked"), function(){
        if($(this).val() == questions[4].correctAnswer) {
        play.correct++;
        } else {
          play.incorrect++; 
        }
      });
      $.each($("input[name='question-5']:checked"), function(){
        if($(this).val() == questions[5].correctAnswer) {
          play.correct++;
          } else {
            play.incorrect++;
          }
      });
      $.each($("input[name='question-6']:checked"), function(){
        if($(this).val() == questions[6].correctAnswer) {
        play.correct++;
        } else {
          play.incorrect++;
        }
      });
      $.each($("input[name='question-7']:checked"), function(){
        if($(this).val() == questions[7].correctAnswer) {
        play.correct++;
        } else {
          play.incorrect++; 
        }
      });
      $.each($("input[name='question-8']:checked"), function(){
        if($(this).val() == questions[8].correctAnswer) {
        play.correct++;
        } else {
          play.incorrect++;
        }
      });
      $.each($("input[name='question-9']:checked"), function(){
        if($(this).val() == questions[9].correctAnswer) {
        play.correct++;
        } else {
          play.incorrect++; 
        }       
      });
      this.result();
    },
      result: function(){
        clearInterval(timer);
        $("#content1 h2").remove();
        $("#content1").html("<h2>All Done!!!!!</h2>");
        $("#content1").append("<h3>Correct Answers: "+this.correct+"</h3>");
        $("#content1").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $("#content1").append("<h3>Questions You Forgot: "+(questions.length-(this.correct+this.incorrect))+"</h3>");
          }
    };

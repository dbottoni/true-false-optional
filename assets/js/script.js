// timer starts after the questions are answered -_-
var timer = document.getElementById('countdown');
var startBtn = document.getElementById('start');


function countdown(){
var timeLeft = 60;

  var timeInterval = setInterval(function(){
    if (timeLeft > 1) {
      timer.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1){
      timer.textContent = timeLeft + ' second remaining';
      timeLeft--;
    }else{
      timer.textContent = '';
      clearInterval(timeInterval);
      runQuestions();
    }
  }, 1000);
}

    startBtn.onclick = countdown;


  // create array
  
    var statements = [
      { q: "Infants are born with approximately 300 bones", a: "t" },
      { q: "The largest bone in the human body is the tibia", a: "f"},
      { q: "An average adult brain weighs one pound", a: "f"},
      { q: "There are 26 bones in the human foot", a: "t"},
      { q: "Banging your head against the wall burns 150 calories an hour", a: "t"}
    ];
  
  var score = 0;

  for (var i = 0; i < statements.length; i++)   {
    var answer = confirm(statements[i].q);


    if ((answer === true && statements[i].a === "t") ||
        (answer === false && statements[i].a ==="f")) {
          score++;
          window.alert("Correct!");
        }
        else{
          score--;
          window.alert("Wrong!");
        }
    }

      alert("You got " + score + "/" + statements.length);



// Lines 53 - 91 are a lengthy version but it does work. I had trouble getting the score to calculate
// q1 = confirm("Infants are born with approximately 300 bones");

// if (q1 === true) {
//   alert("Correct! Infants are born with approximately 300 bones. Our bones fuse as we age, leaving us with 206 in adulthood.")
// } else {
//   alert("Incorrect! Infants are born with approximately 300 bones. Our bones fuse as we age, leaving us with 206 in adulthood.");
// }

// q2 = confirm("The largest bone in the human body is the tibia.")

// if (q2 === true) {
//   alert("Incorrect! The femur is the largest bone in the human body.")
// } else {
//   alert("Correct! The femur is the largest bone in the human body.");
// }

// q3 = confirm("An average adult brain weighs one pound.")

// if (q3 === true) {
//   alert("Incorrect! The average adult brain weighs approximately 3 pounds.")
// } else {
//   alert("Correct! The average adult brain weighs approximately 3 pounds.");
// }

// q4 = confirm("There are 26 bones in the human foot.")

// if (q4 === true) {
//   alert("Correct! There are 26 bones in the human foot")
// } else {
//   alert("Incorrect! There are 26 bones in the human foot");
// }

// q5 = confirm("Banging your head against the wall burns 150 calories an hour.")

// if (q5 === true) {
//   alert("Correct! Banging your head against the wall burns 150 calories an hour - although not recommended.")
// } else {
//   alert("Incorrect! Banging your head against the wall burns 150 calories an hour - although not recommended.");
//  }
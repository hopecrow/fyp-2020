var choice, 
	choices1, 
	choices2,
	choices3,
	choices4,
	choices5;

var TestQuestions = [
	["If \\[f(x) = \\sin 2x \\] Then what is \\[f^\\prime (x)\\]?",
		"\\[f^\\prime(x) = \\cos 2x \\]",
		"\\[f^\\prime(x) = 2 \\cos 2x \\]",
		"B"],
	["If \\[f(x) = e^ {4x} \\] Then what is \\[f^\\prime (x)\\]?",
		"\\[f^\\prime(x) = e^{4x} \\]",
		"\\[f^\\prime(x) =  4e^{4x} \\]",
		"B"],
	["If \\[f(x) = \\cos 5x \\] Then what is \\[f^\\prime (x)\\]?",
		"\\[f^\\prime(x) = -5 \\sin 5x \\]",
		"\\[f^\\prime(x) =  -\\sin 5x \\]",
		"B"],
	["If \\[f(x) = x^2 \\sin x \\] Then what is \\[f^\\prime (x)\\]? ",
		"\\[f^\\prime (x) = 2x \\cos x \\]",
		"\\[f ^\\prime (x) = 2x \\sin x  + x^2 \\cos x \\]",
		"B"],
	["If \\[f(x) = x^3 \\ln x \\] Then what is \\[f^\\prime (x) \\]?",
		"\\[ f^\\prime (x) =  x^2  \\left( 3 \\ln x + 1 \\right) \\]",
		"\\[f^\\prime (x) =  3x \\]",
		"A"],
	["If \\[f(x) =   x^2 \\tan x \\] Then what is \\[f^\\prime (x) \\]? ",
		"\\[f^\\prime (x) = \\frac{2x}{ \\left( \\cos x \\right)^2  }\\]",
		"\\[f^\\prime (x) = 2x \\tan x + \\frac{x^2}{\\left( \\cos x \\right)^2 }  \\]",
		"B"],
	["If \\[f(x) =   \\frac{x}{\\sin x} \\] Then what is \\[f^\\prime (x) \\]?",
		"\\[f^\\prime (x) = \\frac{1}{  \\cos x  } \\]",
		"\\[f^\\prime (x) = \\frac{\\sin x - x \\cos x }{  \\left( \\sin x \\right)^2}\\]",
		"B"],
	["If \\[f(x) =   \\frac{x}{e^x} \\] Then what is \\[f^\\prime (x) \\]? ",
		"\\[f^\\prime (x) = \\frac{1}{ e^x }\\]",
		"\\[f^\\prime (x) = \\frac{e^x - x e^x }{  e^{2x} }\\]",
		"B"],
	["If \\[f(x) = \\left| x \\right| \\] Then what is \\[f^\\prime (x) \\]?",
		"\\[f^\\prime (x) =1 \\]",
		"\\[f^\\prime (x) = \\left\\{ \\begin{array}{cc} -1 & x < 0 \\\\1 & x > 0 \\\\\\end{array}\\right.\\]",
		"B"],
	["If \\[f(x) = x^2 \\] Then what is \\[f(x+h)\\]?",
		"\\[f(x+h)  = x^2 + 2xh + h^2 \\]",
		"\\[f(x+h) = x^2 + h\\]",
		"A"]
];

var q1 = randomization(1);
var q2 = randomization(2);
var q3 = randomization(3);


function renderTest(){
	  var question1 = document.getElementById("question1");
	  var question2 = document.getElementById("question2");
	  var question3 = document.getElementById("question3");
	  var question4 = document.getElementById("question4");
	  var question5 = document.getElementById("question5");
	  var testEnd = document.getElementById("testEnd");

	  document.getElementById("test_status").innerHTML = "Question 1 of 5";
	  document.getElementById("test_status2").innerHTML = "Question 2 of 5";
	  document.getElementById("test_status3").innerHTML = "Question 3 of 5";
	  document.getElementById("test_status4").innerHTML = "Question 4 of 5";
	  document.getElementById("test_status5").innerHTML = "Question 5 of 5";
	  
	  question1.innerHTML = "<h3>"+TestQuestions[q1][0]+"</h3>";
	  question1.innerHTML += "<label class='container'>"+TestQuestions[q1][1]+"<input type='radio' name='choices1' value='A'><span class='checkmark'></span></label><br>";
	  question1.innerHTML += "<label class='container'>"+TestQuestions[q1][2]+"<input type='radio' name='choices1' value='B'><span class='checkmark'></span></label><br>";
	  question1.innerHTML += "<button class='buttonExam' style='vertical-align:middle' onclick='checkAnswer1()'><span>Submit Answer</span></button>";
	 
	  question2.innerHTML = "<h3>"+TestQuestions[3][0]+"</h3>";
	  question2.innerHTML += "<label class='container'>"+TestQuestions[3][1]+"<input type='radio' name='choices2' value='A'><span class='checkmark'></span></label><br>";
	  question2.innerHTML += "<label class='container'>"+TestQuestions[3][2]+"<input type='radio' name='choices2' value='B'><span class='checkmark'></span></label><br>";
	  question2.innerHTML += "<button class='buttonExam' style='vertical-align:middle' onclick='checkAnswer2()'><span>Submit Answer</span></button>";
	  
	  question3.innerHTML = "<h3>"+TestQuestions[6][0]+"</h3>";
	  question3.innerHTML += "<label class='container'>"+TestQuestions[6][1]+"<input type='radio' name='choices3' value='A'><span class='checkmark'></span></label><br>";
	  question3.innerHTML += "<label class='container'>"+TestQuestions[6][2]+"<input type='radio' name='choices3' value='B'><span class='checkmark'></span></label><br>";
	  question3.innerHTML += "<button class='buttonExam' style='vertical-align:middle' onclick='checkAnswer3()'><span>Submit Answer</span></button>";
	 
	  question4.innerHTML = "<h3>"+TestQuestions[8][0]+"</h3>";
	  question4.innerHTML += "<label class='container'>"+TestQuestions[8][1]+"<input type='radio' name='choices4' value='A'><span class='checkmark'></span></label><br>";
	  question4.innerHTML += "<label class='container'>"+TestQuestions[8][2]+"<input type='radio' name='choices4' value='B'><span class='checkmark'></span></label><br>";
	  question4.innerHTML += "<button class='buttonExam' style='vertical-align:middle' onclick='checkAnswer4()'><span>Submit Answer</span></button>";
	 
	  question5.innerHTML = "<h3>"+TestQuestions[9][0]+"</h3>";
	  question5.innerHTML += "<label class='container'>"+TestQuestions[9][1]+"<input type='radio' name='choices5' value='A'><span class='checkmark'></span></label><br>";
	  question5.innerHTML += "<label class='container'>"+TestQuestions[9][2]+"<input type='radio' name='choices5' value='B'><span class='checkmark'></span></label><br>";
	  question5.innerHTML += "<button class='buttonExam' style='vertical-align:middle' onclick='checkAnswer5()'><span>Submit Answer</span></button>";
	  
	  document.getElementById("testStatusEnd").innerHTML = "Test completed";
	  testEnd.innerHTML = "<br>Congratulations! You have completed this Calculus test!<br>";
	  testEnd.innerHTML += "If you came across a different error that was not addressed in this test, please feel free to upload your work to our google drive, linked below, in order to for us to keep expanding and improving our website.<br><br>";
	  testEnd.innerHTML += "<a href='https://drive.google.com/drive/folders/1X1hcZavtUiZFpARh4_8BDYCe_kPsM-E2?usp=sharing'><img border='0' id='drive' src='../../Images/Drive.jpg'></a>";
}

function randomization(question, num){
	if (question == 1) {
		var renum = Math.floor(Math.random() * 3);
		return renum;
	}
	else if (question == 2) {
		var renum = Math.floor((Math.random() * 3) + 3);
		return renum;
	}
	else if (question == 3) {
		var renum = Math.floor((Math.random() * 2) + 6);
		return renum;
	}
	else {
		return 0;
	}
}

function checkAnswer1(){
  choices1 = document.getElementsByName("choices1");
  for(var i=0; i<choices1.length; i++){
    if(choices1[i].checked){choice = choices1[i].value;}
  }
  if(choice == TestQuestions[q1][3]){
	document.getElementById("question1").innerHTML = "<br><h2>Correct!<h2><br><p style='font-size: 12pt'>Congratulations!<br>You choose the correct responce!</p>";
  }
  else {
	//Video will be chosen depending on incorrect result
	document.getElementById("question1").innerHTML = "<br><h2>Incorrect!<h2><br><p style='font-size: 12pt'>The video below shows what common error we believe was made during while calculating your result.</p>";
	document.getElementById("question1").innerHTML += "<video width='100%' height='auto' controls> <source src='../../Videos/CalQ1.mp4' type='video/mp4'></video>";
  }
}

function checkAnswer2(){
	  choices2 = document.getElementsByName("choices2");
	  for(var i=0; i<choices2.length; i++){
	    if(choices2[i].checked){choice = choices2[i].value;}
	  }
	  if(choice == TestQuestions[q2][3]){
		document.getElementById("question2").innerHTML = "<br><h2>Correct!<h2><br><p style='font-size: 12pt'>Congratulations!<br>You choose the correct responce!</p>";
	  }
	  else {
		//Video will be chosen depending on incorrect result
		document.getElementById("question2").innerHTML = "<br><h2>Incorrect!<h2><br><p style='font-size: 12pt'>The video below shows what common error we believe was made during while calculating your result.</p>";
		document.getElementById("question2").innerHTML += "<video width='100%' height='auto' controls> <source src='../../Videos/CalQ2.mp4' type='video/mp4'></video>";
	  }
	}

function checkAnswer3(){
	  choices3 = document.getElementsByName("choices3");
	  for(var i=0; i<choices3.length; i++){
	    if(choices3[i].checked){choice = choices3[i].value;}
	  }
	  if(choice == TestQuestions[q3][3]){
		document.getElementById("question3").innerHTML = "<br><h2>Correct!<h2><br><p style='font-size: 12pt'>Congratulations!<br>You choose the correct responce!</p>";
	  }
	  else {
		//Video will be chosen depending on incorrect result
		document.getElementById("question3").innerHTML = "<br><h2>Incorrect!<h2><br><p style='font-size: 12pt'>The video below shows what common error we believe was made during while calculating your result.</p>";
		document.getElementById("question3").innerHTML += "<video width='100%' height='auto' controls> <source src='../../Videos/CalQ3.mp4' type='video/mp4'></video>";
	  }
	}

function checkAnswer4(){
	  choices4 = document.getElementsByName("choices4");
	  for(var i=0; i<choices4.length; i++){
	    if(choices4[i].checked){choice = choices4[i].value;}
	  }
	  if(choice == TestQuestions[8][3]){
		document.getElementById("question4").innerHTML = "<br><h2>Correct!<h2><br><p style='font-size: 12pt'>Congratulations!<br>You choose the correct responce!</p>";
	  }
	  else {
		//Video will be chosen depending on incorrect result
		document.getElementById("question4").innerHTML = "<br><h2>Incorrect!<h2><br><p style='font-size: 12pt'>The video below shows what common error we believe was made during while calculating your result.</p>";
		document.getElementById("question4").innerHTML += "<video width='100%' height='auto' controls> <source src='../../Videos/CalQ4.mp4' type='video/mp4'></video>";
	  }
	}

function checkAnswer5(){
	  choices5 = document.getElementsByName("choices5");
	  for(var i=0; i<choices5.length; i++){
	    if(choices5[i].checked){choice = choices5[i].value;}
	  }
	  if(choice == TestQuestions[9][3]){
		document.getElementById("question5").innerHTML = "<br><h2>Correct!<h2><br><p style='font-size: 12pt'>Congratulations!<br>You choose the correct responce!</p>";
	  }
	  else {
		//Video will be chosen depending on incorrect result
		document.getElementById("question5").innerHTML = "<br><h2>Incorrect!<h2><br><p style='font-size: 12pt'>The video below shows what common error we believe was made during while calculating your result.</p>";
		document.getElementById("question5").innerHTML += "<video width='100%' height='auto' controls> <source src='../../Videos/CalQ5.mp4' type='video/mp4'></video>";
	  }
	}

window.addEventListener("load", renderTest, false); 
















var choice, 
	choices1, 
	choices2,
	choices3,
	choices4,
	choices5;

var TestQuestions = [
  ["What is the inverse of the matrix \\[{\\mathbf A }  = \\left[ \\begin{array}{cc} 1 & 2 \\\\3 & 4 \\\\\\end{array}\\right]\\]", 
	  "\\[{\\mathbf A}^{-1}  = \\left[ \\begin{array}{cc} 1 & \\frac{1}{2} \\\\\\frac{1}{3}  & \\frac{1}{4} \\\\\\end{array} \\right]\\]", 
	  "\\[{\\mathbf A}^{-1}  = \\left[ \\begin{array}{cc} -2 & 1  \\\\1.5 & -0.5  \\\\\\end{array} \\right] \\]",
	  "\\[{\\mathbf A}^{-1}  = \\left[ \\begin{array}{cc} 4 & -2  \\\\-3 & 1  \\\\\\end{array} \\right] \\]",
	  "B"],
  ["Compute the product \\[\\left[ \\begin{array}{cc} 1 & 2 \\\\3 & 4 \\\\\\end{array}\\right]\\left[ \\begin{array}{cc} 3 & 8 \\\\4 & 5 \\\\\\end{array} \\right]\\]", 
	  "\\[\\left[ \\begin{array}{cc} 3 & 16  \\\\12  & 20  \\\\\\end{array} \\right]\\]", 
	  "\\[\\left[ \\begin{array}{cc} 11 & 18  \\\\25 & 44  \\\\\\end{array} \\right]\\]", 
	  "Neither", 
	  "B"],
  ["Compute the determinant of \\[\\mathbf{A }  = \\left[ \\begin{array}{ccc} 1 & 2 & 3\\\\3 & 5 & 8  \\\\4 & 2 & 8  \\\\\\end{array} \\right]\\]", 
	  "\\[\\det {\\mathbf A}  = 14\\] ", 
	  "\\[\\det {\\mathbf A}  = -2\\] ", 
	  "\\[\\det {\\mathbf A} =  -34\\]", 
	  "B"],
  ["Let \\[{\\mathbf A} = \\left[ \\begin{array}{c} 1 \\\\ 2 \\\\ 3 \\end{array} \\right] \\] and \\[{\\mathbf B} = \\left[ \\begin{array}{c} 3 \\\\ -2 \\\\ 5 \\end{array} \\right] \\] What is \\[{\\mathbf A}^T {\\mathbf B}\\]?", 
	  "\\[{\\mathbf A}^T {\\mathbf B} =  \\left[ \\begin{array}{c} 3 \\\\ -4 \\\\ 15 \\end{array} \\right] \\] ", 
	  "\\[{\\mathbf A}^T {\\mathbf B} = \\left[ \\begin{array}{ccc} 3 & -2  & 5  \\\\6 & -4  & 10  \\\\9 & -6  & 15  \\\\\\end{array} \\right] \\] ", 
	  "\\[{\\mathbf A}^T {\\mathbf B} = 14 \\]", 
	  "C"],
  ["Let \\[{\\mathbf A} = \\left[ \\begin{array}{c} 1 \\\\ 0 \\\\ -2 \\end{array} \\right] \\] and \\[{\\mathbf B} = \\left[ \\begin{array}{c} 3 \\\\ -2 \\\\ 5 \\end{array} \\right] \\] What is \\[{\\mathbf A} {\\mathbf B}^T\\]?", 
	  " \\[ {\\mathbf A} {\\mathbf B}^T = \\left[ \\begin{array}{c} 3 \\\\ 0 \\\\ -10 \\end{array} \\right] \\] ", 
	  "\\[{\\mathbf A} {\\mathbf B}^T = \\left[ \\begin{array}{ccc} 3 & -2  & 5  \\\\0 & 0  & 0  \\\\-6 & 4  & -10  \\\\\\end{array} \\right] \\] ", 
	  "\\[{\\mathbf A}{\\mathbf B}^T =  -7 \\]", 
	  "B"]
  ];


function renderTest(){
	  var question1 = document.getElementById("question1");
	  var question2 = document.getElementById("question2");
	  var question3 = document.getElementById("question3");
	  var question4 = document.getElementById("question4");
	  var question5 = document.getElementById("question5");
	  var testEnd = document.getElementById("testEnd");

	  document.getElementById("test_status").innerHTML = "Question 1 of "+TestQuestions.length;
	  document.getElementById("test_status2").innerHTML = "Question 2 of "+TestQuestions.length;
	  document.getElementById("test_status3").innerHTML = "Question 3 of "+TestQuestions.length;
	  document.getElementById("test_status4").innerHTML = "Question 4 of "+TestQuestions.length;
	  document.getElementById("test_status5").innerHTML = "Question 5 of "+TestQuestions.length;
	  
	  question1.innerHTML = "<h3>"+TestQuestions[0][0]+"</h3>";
	  question1.innerHTML += "<label class='container'>"+TestQuestions[0][1]+"<input type='radio' name='choices1' value='A'><span class='checkmark'></span></label><br>";
	  question1.innerHTML += "<label class='container'>"+TestQuestions[0][2]+"<input type='radio' name='choices1' value='B'><span class='checkmark'></span></label><br>";
	  question1.innerHTML += "<label class='container'>"+TestQuestions[0][3]+"<input type='radio' name='choices1' value='C'><span class='checkmark'></span></label><br>";
	  question1.innerHTML += "<button class='buttonExam' style='vertical-align:middle' onclick='checkAnswer1()'><span>Submit Answer</span></button>";
	 
	  question2.innerHTML = "<h3>"+TestQuestions[1][0]+"</h3>";
	  question2.innerHTML += "<label class='container'>"+TestQuestions[1][1]+"<input type='radio' name='choices2' value='A'><span class='checkmark'></span></label><br>";
	  question2.innerHTML += "<label class='container'>"+TestQuestions[1][2]+"<input type='radio' name='choices2' value='B'><span class='checkmark'></span></label><br>";
	  question2.innerHTML += "<label class='container'>"+TestQuestions[1][3]+"<input type='radio' name='choices2' value='C'><span class='checkmark'></span></label><br>";
	  question2.innerHTML += "<button class='buttonExam' style='vertical-align:middle' onclick='checkAnswer2()'><span>Submit Answer</span></button>";
	  
	  question3.innerHTML = "<h3>"+TestQuestions[2][0]+"</h3>";
	  question3.innerHTML += "<label class='container'>"+TestQuestions[2][1]+"<input type='radio' name='choices3' value='A'><span class='checkmark'></span></label><br>";
	  question3.innerHTML += "<label class='container'>"+TestQuestions[2][2]+"<input type='radio' name='choices3' value='B'><span class='checkmark'></span></label><br>";
	  question3.innerHTML += "<label class='container'>"+TestQuestions[2][3]+"<input type='radio' name='choices3' value='C'><span class='checkmark'></span></label><br>";
	  question3.innerHTML += "<button class='buttonExam' style='vertical-align:middle' onclick='checkAnswer3()'><span>Submit Answer</span></button>";
	 
	  question4.innerHTML = "<h3>"+TestQuestions[3][0]+"</h3>";
	  question4.innerHTML += "<label class='container'>"+TestQuestions[3][1]+"<input type='radio' name='choices4' value='A'><span class='checkmark'></span></label><br>";
	  question4.innerHTML += "<label class='container'>"+TestQuestions[3][2]+"<input type='radio' name='choices4' value='B'><span class='checkmark'></span></label><br>";
	  question4.innerHTML += "<label class='container'>"+TestQuestions[3][3]+"<input type='radio' name='choices4' value='C'><span class='checkmark'></span></label><br>";
	  question4.innerHTML += "<button class='buttonExam' style='vertical-align:middle' onclick='checkAnswer4()'><span>Submit Answer</span></button>";
	 
	  question5.innerHTML = "<h3>"+TestQuestions[4][0]+"</h3>";
	  question5.innerHTML += "<label class='container'>"+TestQuestions[4][1]+"<input type='radio' name='choices5' value='A'><span class='checkmark'></span></label><br>";
	  question5.innerHTML += "<label class='container'>"+TestQuestions[4][2]+"<input type='radio' name='choices5' value='B'><span class='checkmark'></span></label><br>";
	  question5.innerHTML += "<label class='container'>"+TestQuestions[4][3]+"<input type='radio' name='choices5' value='C'><span class='checkmark'></span></label><br>";
	  question5.innerHTML += "<button class='buttonExam' style='vertical-align:middle' onclick='checkAnswer5()'><span>Submit Answer</span></button>";
	  
	  document.getElementById("testStatusEnd").innerHTML = "Test completed";
	  testEnd.innerHTML = "<br>Congratulations! You have completed this algebra test!<br>";
	  testEnd.innerHTML += "If you came across a different error that was not addressed in this test, please feel free to upload your work to our google drive, linked below, in order to for us to keep expanding and improving our website.<br><br>";
	  testEnd.innerHTML += "<a href='https://drive.google.com/drive/folders/1-Sty6i286-TbJVS2-Yfh3HrPd3qCxM5M?usp=sharing'><img border='0' id='drive' src='../../Images/Drive.jpg'></a>";
}

function checkAnswer1(){
  choices1 = document.getElementsByName("choices1");
  for(var i=0; i<choices1.length; i++){
    if(choices1[i].checked){choice = choices1[i].value;}
  }
  if(choice == TestQuestions[0][4]){
	document.getElementById("question1").innerHTML = "<br><h2>Correct!<h2><br><p style='font-size: 12pt'>Congratulations!<br>You choose the correct responce!</p>";
  }
  else {
	//Video will be chosen depending on incorrect result
	document.getElementById("question1").innerHTML = "<br><h2>Incorrect!<h2><br><p style='font-size: 12pt'>The video below shows what common error we believe was made during while calculating your result.</p>";
	document.getElementById("question1").innerHTML += "<video width='100%' height='auto' controls> <source src='../../Videos/TestVideo.mp4' type='video/mp4'></video>";
  }
}

function checkAnswer2(){
	  choices2 = document.getElementsByName("choices2");
	  for(var i=0; i<choices2.length; i++){
	    if(choices2[i].checked){choice = choices2[i].value;}
	  }
	  if(choice == TestQuestions[1][4]){
		document.getElementById("question2").innerHTML = "<br><h2>Correct!<h2><br><p style='font-size: 12pt'>Congratulations!<br>You choose the correct responce!</p>";
	  }
	  else {
		//Video will be chosen depending on incorrect result
		document.getElementById("question2").innerHTML = "<br><h2>Incorrect!<h2><br><p style='font-size: 12pt'>The video below shows what common error we believe was made during while calculating your result.</p>";
		document.getElementById("question2").innerHTML += "<video width='100%' height='auto' controls> <source src='../../Videos/TestVideo.mp4' type='video/mp4'></video>";
	  }
	}

function checkAnswer3(){
	  choices3 = document.getElementsByName("choices3");
	  for(var i=0; i<choices3.length; i++){
	    if(choices3[i].checked){choice = choices3[i].value;}
	  }
	  if(choice == TestQuestions[2][4]){
		document.getElementById("question3").innerHTML = "<br><h2>Correct!<h2><br><p style='font-size: 12pt'>Congratulations!<br>You choose the correct responce!</p>";
	  }
	  else {
		//Video will be chosen depending on incorrect result
		document.getElementById("question3").innerHTML = "<br><h2>Incorrect!<h2><br><p style='font-size: 12pt'>The video below shows what common error we believe was made during while calculating your result.</p>";
		document.getElementById("question3").innerHTML += "<video width='100%' height='auto' controls> <source src='../../Videos/TestVideo.mp4' type='video/mp4'></video>";
	  }
	}

function checkAnswer4(){
	  choices4 = document.getElementsByName("choices4");
	  for(var i=0; i<choices4.length; i++){
	    if(choices4[i].checked){choice = choices4[i].value;}
	  }
	  if(choice == TestQuestions[3][4]){
		document.getElementById("question4").innerHTML = "<br><h2>Correct!<h2><br><p style='font-size: 12pt'>Congratulations!<br>You choose the correct responce!</p>";
	  }
	  else {
		//Video will be chosen depending on incorrect result
		document.getElementById("question4").innerHTML = "<br><h2>Incorrect!<h2><br><p style='font-size: 12pt'>The video below shows what common error we believe was made during while calculating your result.</p>";
		document.getElementById("question4").innerHTML += "<video width='100%' height='auto' controls> <source src='../../Videos/TestVideo.mp4' type='video/mp4'></video>";
	  }
	}

function checkAnswer5(){
	  choices5 = document.getElementsByName("choices5");
	  for(var i=0; i<choices5.length; i++){
	    if(choices5[i].checked){choice = choices5[i].value;}
	  }
	  if(choice == TestQuestions[4][4]){
		document.getElementById("question5").innerHTML = "<br><h2>Correct!<h2><br><p style='font-size: 12pt'>Congratulations!<br>You choose the correct responce!</p>";
	  }
	  else {
		//Video will be chosen depending on incorrect result
		document.getElementById("question5").innerHTML = "<br><h2>Incorrect!<h2><br><p style='font-size: 12pt'>The video below shows what common error we believe was made during while calculating your result.</p>";
		document.getElementById("question5").innerHTML += "<video width='100%' height='auto' controls> <source src='../../Videos/TestVideo.mp4' type='video/mp4'></video>";
	  }
	}

window.addEventListener("load", renderTest, false); 
















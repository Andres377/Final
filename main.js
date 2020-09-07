function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var correct = 0;


	if (question1 == "1945") {
		correct++;
}
	if (question2 == "Correct") {
		correct++;
}	
	if (question3 == "Correct") {
		correct++;
	}
	if (question4 == "32") {
		correct++;
}
	if (question5 == "Correct") {
		correct++;
}	
	if (question6 == "Correct") {
		correct++;
	}
	if (question7 == "Correct") {
		correct++;
}	
	if (question8 == "Correct") {
		correct++;
	}

	var pictures = ["gj.gif", "meh.gif", "lose.gif"];
	var messages = ["Ganaste", "Procura mejorar", "Que haces aqui coje un libro"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 8) {
		score = 1;
	}

	if (correct == 8) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Score:" + correct ;
	document.getElementById("picture").src = pictures[score];
	}
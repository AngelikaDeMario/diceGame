
function startRound(myQuestions){
 let roll = rollDice(20);
 let question = decideQuestion(myQuestions,roll);
}

function rollDice(diceSide){
	var rollNumber = Math.floor(Math.random() * diceSide + 1); 
	return rollNumber;
}


function decideQuestion (myQuestions, diceRoll){
		console.log(myQuestions[diceRoll].question);
	return myQuestions[diceRoll].question;
	//}
}
function findDifficultyQuestions(myQuestions, difficultyLevel) {
	 var output = [];
		
	 for (var i = 0; i < myQuestions.length; i++) {
		 if (myQuestions[i].difficulty === difficultyLevel) {

			output.push(myQuestions[i]);
		 }
	 }
	 return output;
}

function roundOne(myQuestions){
	var questionResult = getQuestion(rolledNumber, myQuestions);
	return questionResult;
	
}


function getQuestion(rolledNumber, myQuestions){
	var results = findDifficultyQuestions(myQuestions, 1);
	var question = findRoundOneQuestion(results, rolledNumber);
	return question;
}


function displayQuestion(questionResult){
	document.getElementById("question").innerHTML = questionResult;

}

function getQuestion(rolledNumber, myQuestions){
	var results = findDifficultyQuestions(myQuestions, 1);
	var question = findRoundOneQuestion(results, rolledNumber);
	return question;
}



function findRoundOneQuestion(results, rolledNumber){
	//switch case for only round one question options. in each case have a return results.question;
	switch(rolledNumber) {
		case 1:
		return results[0].question;
		case 2:
		return results[1].question;
		case 3:
		return results[2].question;
		case 4:
		return results[3].question;
		case 5:
		return results[4].question;
		case 6:
		return results[5].question;
		case 7:
		return results[6].question;
		case 8:
		return results[7].question;
		case 9:
		return results[8].question;
		case 10:
		return results[9].question;
		case 11:
		return results[10].question;
		case 12:
		return results[11].question;
		case 13:
		return results[12].question;
		case 14:
		return results[13].question;
		case 15:
		return results[14].question;
		case 16:
		return results[15].question;
		case 17:
		return results[16].question;
		case 18:
		return results[17].question;
		case 19:
		return results[18].question;
		case 20:
		return results[19].question;
		default: 
		console.log("No question found");
		break;
	}
}

function roundStart(myQuestions){
 let roll = rollDice(12);
 let question = decideQuestion(myQuestions,roll);
}

function rollDice(diceSide){
	var rollNumber = Math.floor(Math.random() * diceSide + 1); 
	return rollNumber;
}


function decideQuestion (myQuestions, diceRoll){
		console.log(myQuestions[diceRoll].question);
	return myQuestions[diceRoll].question;
	//}
}
function findDifficultyQuestions(myQuestions, difficultyLevel) {
	 var output = [];
		
	 for (var i = 0; i < myQuestions.length; i++) {
		 if (myQuestions[i].difficulty === difficultyLevel) {

			output.push(myQuestions[i]);
		 }
	 }
	 return output;
}

function roundTwo(myQuestions){
	var questionResult = getQuestion(rolledNumber, myQuestions);
	return questionResult;
	
}



function displayQuestion(questionResult){
	document.getElementById("question").innerHTML = questionResult;


}
function getQuestion(rolledNumber, myQuestions){
	var results = findDifficultyQuestions(myQuestions, 2);
	var question = findRoundTwoQuestion(results, rolledNumber);
	return question;
}



function findRoundTwoQuestion(results, rolledNumber){
	switch(rolledNumber) {
		case 1: 
		return results[0].question;
		case 2: 
		return results[1].question;
		case 3: 
		return results[2].question;
		case 4: 
		return results[3].question;
		case 5: 
		return results[4].question;
		case 6: 
		return results[5].question;
		case 7: 
		return results[6].question;
		case 8: 
		return results[7].question;
		case 9: 
		return results[8].question;
		case 10: 
		return results[9].question;
		case 11: 
		return results[10].question;
		case 12: 
		return results[11].question;
		default:
		console.log("No question found");
		break;
	}
}


function roundThree(myQuestions){
	var rolledNumber = rollDice(10);
	var questionResult = getQuestion(rolledNumber, myQuestions);
	return questionResult;
}

function rollDice(diceSide){
	var rollNumber = Math.floor(Math.random() * diceSide + 1); 
	return rollNumber;
}

function getQuestion(rolledNumber, myQuestions){
	var results = findDifficultyQuestions(myQuestions, 1);
	var question = findRoundThreeQuestion(results, rolledNumber);
	return question;
}

function findDifficultyQuestions(myQuestions, difficultyLevel) {
	 var output = [];
		
	 for (var i = 0; i < myQuestions.length; i++) {
		 if (myQuestions[i].difficulty === difficultyLevel) {

			output.push(myQuestions[i]);
		 }
	 }
	 return output;
}

function findroundThreeQuestion(results, rolledNumber) {
	switch(rolledNumber) {
		case 1:
		return results[0].questions;
		case 2:
		return results[1].questions;
		case 3:
		return results[2].questions;
		case 4:
		return results[3].questions;
		case 5:
		return results[4].questions;
		case 6:
		return results[5].questions;
		case 7:
		return results[6].questions;
		case 8:
		return results[7].questions;
		case 9:
		return results[8].questions;
		case 10:
		return results[9].questions;
		default:
		console.log("No question found");
		break;
	}
}

function roundFour(myQuestions){
	var rolledNumber = rollDice(8);
	var questionResult = getQuestion(rolledNumber, myQuestions);
	return questionResult;
}

function rollDice(diceSide){
	var rollNumber = Math.floor(Math.random() * diceSide + 1); 
	return rollNumber;
}

function getQuestion(rolledNumber, myQuestions){
	var results = findDifficultyQuestions(myQuestions, 1);
	var question = findRoundFourQuestion(results, rolledNumber);
	return question;
}

function findDifficultyQuestions(myQuestions, difficultyLevel) {
	 var output = [];
		
	 for (var i = 0; i < myQuestions.length; i++) {
		 if (myQuestions[i].difficulty === difficultyLevel) {

			output.push(myQuestions[i]);
		 }
	 }
	 return output;
}
function findRoundFourQuestion(results, rolledNumber){
	switch(rollNumber) {
	case 1:
	return results[0].question;
	case 2:
	return results[1].question;
	case 3:
	return results[2].question;
	case 4:
	return results[3].question;
	case 5:
	return results[4].question;
	case 6:
	return results[5].question;
	case 7:
	return results[6].question;
	case 8:
	return results[7].question;
	default:
	console.log("No question found");
	break;
	}
}
	
	// let questionResult = function pickQuestion(diceRoll){
// if (obj.difficulty===5){
// return myQuestion.question[diceRoll]
// }


function roundFive(myQuestions){
	var rolledNumber = rollDice(6);
	var questionResult = getQuestion(rolledNumber, myQuestions);
	return questionResult;
}

function rollDice(diceSide){
	var rollNumber = Math.floor(Math.random() * diceSide + 1); 
	return rollNumber;
}

function getQuestion(rolledNumber, myQuestions){
	var results = findDifficultyQuestions(myQuestions, 1);
	var question = findRoundFiveQuestion(results, rolledNumber);
	return question;
}

function findDifficultyQuestions(myQuestions, difficultyLevel) {
	 var output = [];
		
	 for (var i = 0; i < myQuestions.length; i++) {
		 if (myQuestions[i].difficulty === difficultyLevel) {

			output.push(myQuestions[i]);
		 }
	 }
	 return output;
}
function findRoundFiveQuestion(results, rolledNumber) {
	switch(rollNumber) {
		case 1: 
		return results[0].question;
		case 2: 
		return results[1].question;
		case 3: 
		return results[2].question;
		case 4: 
		return results[3].question;
		case 5: 
		return results[4].question;
		case 6: 
		return results[5].question;
		default:
		console.log("No question found");
		break;
	}
}

// let questionResult = function pickQuestion(diceRoll){
// if (obj.difficulty===6){
// return myQuestion.question[diceRoll]
// }


function roundSix(myQuestions){
	var rolledNumber = rollDice(4);
	var questionResult = getQuestion(rolledNumber, myQuestions);
	return questionResult;
}

function rollDice(diceSide){
	var rollNumber = Math.floor(Math.random() * diceSide + 1); 
	return rollNumber;
}

function getQuestion(rolledNumber, myQuestions){
	var results = findDifficultyQuestions(myQuestions, 1);
	var question = findRoundSixQuestion(results, rolledNumber);
	return question;
}

function findDifficultyQuestions(myQuestions, difficultyLevel) {
	 var output = [];
		
	 for (var i = 0; i < myQuestions.length; i++) {
		 if (myQuestions[i].difficulty === difficultyLevel) {

			output.push(myQuestions[i]);
		 }
	 }
	 return output;
}

function findRoundSixQuestion(results, rolledNumber){
	switch(rollNumber) {
		case 1:
		return results[0].question;
		case 2:
		return results[1].question;
		case 3:
		return results[2].question;
		case 4:
		return results[3].question;
		default:
		console.log("No question found");
		break;
	}
}

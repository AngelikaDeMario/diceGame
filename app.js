
// displayQuestions(data);
let questionResult = function pickQuestion(diceRoll){
if (obj.difficulty=1)(function
return myQuestion.question[diceRoll]
}


function roundOne(myQuestions){
	var rolledNumber = rollDice(20);
	var questionResult = getQuestion(rolledNumber, myQuestions);
	return questionResult;
}

function rollDice(diceSide){
	var rollNumber = Math.floor(Math.random() * diceSide + 1); 
	return rollNumber;
}

function getQuestion(rolledNumber, myQuestions){
	var results = findDifficultyQuestions(myQuestions, 1);
	var question = findRoundOneQuestion(results, rolledNumber);
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
		default 21: 
		return results[20].questions;
	}
}

// displayQuestions(data);
let questionResult = function pickQuestion(diceRoll){
if (obj.difficulty=2)(function
return myQuestion.question[diceRoll]
}


function roundOne(myQuestions){
	var rolledNumber = rollDice(12);
	var questionResult = getQuestion(rolledNumber, myQuestions);
	return questionResult;
}

function rollDice(diceSide){
	var rollNumber = Math.floor(Math.random() * diceSide + 1); 
	return rollNumber;
}

function getQuestion(rolledNumber, myQuestions){
	var results = findDifficultyQuestions(myQuestions, 1);
	var question = findRoundOneQuestion(results, rolledNumber);
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

function findRoundOneQuestion(results, rolledNumber){
	case 1: 
	return results[21].question;
	case 2: 
	return results[22].question;
	case 3: 
	return results[23].question;
	case 4: 
	return results[24].question;
	case 5: 
	return results[25].question;
	case 6: 
	return results[26].question;
	case 7: 
	return results[27].question;
	case 8: 
	return results[28].question;
	case 9: 
	return results[29].question;
	case 10: 
	return results[30].question;
	case 11: 
	return results[31].question;
	case 12: 
	return results[32].question;
	default 13:
	return results[33].quetion;
}
	
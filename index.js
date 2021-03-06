/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;
if (votingAge >= 18) {
    console.log(true);
}
else {
    console.log(false);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let speed = 50;
if (speed <= 30) {
    console.log("safe");
}
else {
    console.log("ticket");
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let strYear = "1999";
let intYear = parseInt(strYear);
console.log(intYear);

//Task d: Write a function to multiply a*b

function multiply(a,b) {
    return a * b;
};
console.log(multiply(7,40));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function ageInDogYears(myAge, dogYears) {
     return myAge * dogYears;
};
console.log(ageInDogYears(38,7));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function feedRequired(ageYears, weightLbs) {
    if (weightLbs <= 5 && ageYears >= 1) {
        return "Your dog requires " + (weightLbs * .05).toFixed(2) + " lbs of food daily."
    }
    else if (weightLbs > 5 && weightLbs <= 10 && ageYears >= 1) {
        return "Your dog requires " + (weightLbs * .04).toFixed(2) + " lbs of food daily."
    }
    else if (weightLbs > 10 && weightLbs <= 15 && ageYears >= 1) {
        return "Your dog requires " + (weightLbs * .03).toFixed(2) + " lbs of food daily."
    }
    else if (weightLbs > 15 && ageYears >= 1) {
        return "Your dog requires " + (weightLbs * .02).toFixed(2) + " lbs of food daily."
    }
    else if (ageYears < 1 && ageYears >= .58) {
        return "Your dog requires " + (weightLbs * .10).toFixed(2) + " lbs of food daily."
    }
    else if (ageYears < .58 && ageYears >= .33) {
        return "Your dog requires " + (weightLbs * .05).toFixed(2) + " lbs of food daily."
    }
    else if (ageYears < .33 && ageYears >= .17) {
        return "Your dog requires " + (weightLbs * .04).toFixed(2) + " lbs of food daily."
    }
}
console.log(feedRequired(1,15));



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

let userChoice = prompt('rock, paper, or scissors?');
let comChoice = Math.random();

    if(comChoice <= 0.33){
        comChoice = 'rock';
    }else if(comChoice <= 0.66){
        compChoice = 'paper';
    }else if(comChoice < 1){
        comChoice = 'scissors';
    };

function gameResult(userChose, comChose){
    if(userChose === comChose){
        return 'Tied Game...';
    }else if(userChose === 'rock' && comChose === 'scissors'){
        return 'You win!';
    }else if(userChose === 'paper' && comChose === 'rock'){
        return 'You win!';
    }else if(userChose === 'scissors' && comChose === 'paper'){
        return 'You win!';
    }else{
        return 'Loser!';
    }
};
console.log(gameResult(userChoice, comChoice));



/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(km) {
    const mile = 1.6;
        return km / mile;
};
console.log(kmToMiles(100));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function ftToCm(foot) {
    const cm = 30.48;
        return foot * cm;
};
console.log(ftToCm(40));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(bottleCount){
    for(let i = bottleCount; i >= 1; i--){
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Ya take one down, pass it around, " + (i-1) + " bottles of beer on the wall!")
    };
};
console.log(annoyingSong(99));



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function gradeCalculator(score) {
    if (score <= 100 && score >= 90) {
        return "You received an A";
    }
    else if (score < 90 && score >= 80) {
        return "You received an B";
    }
    else if (score < 80 && score >= 70) {
        return "You received an C";
    }
    else if (score < 70 && score >= 60) {
        return "You received an D";
    }
    else if (score < 60) {
        return "You lose, please try again!";
    }
}
console.log(gradeCalculator(100));



/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object






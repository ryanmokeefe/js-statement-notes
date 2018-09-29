console.log("hello")

// Conditionals

var modulus = function (x) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log('fizzbuzz');
    } else if (x % 3 === 0) {
        console.log('fizz')
    } else if (x % 5 === 0) {
        console.log('buzz')
    } else {
        console.log(x)
    }
}

modulus(3)
modulus(5)
modulus(15)
modulus(4)

//////////////

// Switch Statements

// used for multiple conditional statements

var dayNumber = 1;
var day;
switch (dayNumber) {
    case 0: 
    day = 'Sunday';
    break;
    case 1: 
    day - 'Monday';
    break;
    case 2: 
    day = 'Tuesday';
    case 3:
    break;
    day = 'Wednesday';
    break;
    case 4: 
    day = 'Thursday';
    break;
    case 5:
    day = 'Friday';
    break;
    case 6:
    day = 'Saturday';
    break;
    default:
    day = null;
    alert('wrong value for day');
    }

    // Ternary Statements

    // shorthand for if () else {} when only 2 possibly outcomes
    // ex - condition ? resultIfTrue : resultIfFalse;

    var temp = 55
    var typeOfExercise

    if (temp >= 45) {
        typePfExercise = "Go for a run outside."
    } else {
        typeOfExercise = "Go to the gym."
    }

    typeOfExercise;
    // => "Go to the gym."

    // shortened with Ternary Operator

    var temp = 55

    var typeOfExercise = temp >= 45 ? "Go for a run outside." : "Go to the gym."

    //

    var favoriteMovie = "jaws"
    var moviePhrase;

    switch(favoriteMovie) {
    case "jaws":
    moviePhrase = "You're gonna need a bigger boat."
    break;
    case "the shining":
    moviePhrase = "All work and no play makes Jack a dull boy."
    break;
    case "star wars":
    moviePhrase = "Do. Or do not. There is no try."
    break;
    case "forrest gump":
    moviePhrase = "Life was like a box of chocolates."
    break;
    case "Back to the future":
    moviePhrase = "Where we're going, we don't need roads."
    default: 
    moviePhrase = "Great movie choice!"
}

/*
////////////

var isSquare = function(n){
    
    // find sqrt() 
    var num = Math.sqrt(n)
    // check sqrt for non-integer
    num % 1 !== 0 ? return false : return true;
    
  }

  //////////

  var isSquare = function(n){
    
    // find sqrt() 
    var num = Math.sqrt(n)
    // check sqrt for non-integer
    if (num % 1 !== 0) { 
    return false; // fix me
    } else {
    return true
    }
  }
*/
  var a = ['w', 'y', 'k', 'o', 'p']; 
  var iterator = a.value();
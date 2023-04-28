// Declare the global variables
let numberKm, userAge, userName, basePrice, finalPrice;

// The program will ask for the user's name
userName = document.getElementById("name_input").value;
console.log("User's name is : " + userName);

// The program will ask the user for the number of kilometers he wants to travel
numberKm = document.getElementById("km_input").value;
console.log( "The km are : " + numberKm );

// The program will ask for the user's age
userAge = document.getElementById("age_input").value;
console.log( "the users is " + userAge );

// The ticket price is defined on the basis of km (€0.21 per km)
basePrice = (numberKm * 0.21)
console.log("The base price is :" + basePrice + "€");
// Declare the global variables
let numberKm, userAge, userName, basePrice, finalPrice, ticket_discount, wagon, random_cp, generator, exit, ticketCard;

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

if (userAge === "minorenne" ) {// A 20% discount is applied for minors
    finalPrice = basePrice - (basePrice * 20 / 100) ;
}
// A 40% discount is applied for over 65s.
else if ( userAge === ">65" ) {
    finalPrice = basePrice - (basePrice * 40 / 100);
} 
else {// Based on this information, he will calculate the total price of the trip
    finalPrice = basePrice;
}
console.log("The final price is " + finalPrice + "€");

// OUTPUT

    // name
    document.getElementById("user_name").innerHTML = userName;  

    // ticket discount
    if (userAge === "minorenne" ) {
        ticket_discount =  "Sconto studente"
    }
    else if ( userAge === ">65" ) {
        ticket_discount = "Tariffa scontata"
    }
    else{
        ticket_discount = "Tariffa base"
    }
    console.log("L'entità della tariffa è :" + ticket_discount);

    document.getElementById("ticket_discount").innerHTML = ticket_discount; 

    // wagon
    wagon = Math.floor(Math.random() * 25) + 1;
    console.log(wagon);

    document.getElementById("wagon").innerHTML = wagon; 

    // random cp 
    random_cp = Math.floor(Math.random() * 750) + 1;
    console.log(random_cp);

    document.getElementById("random_cp").innerHTML = random_cp; 

    // ticket price
    document.getElementById("finalPrice").innerHTML = finalPrice + "€"


// generator and exit
generator = document.getElementById("generator");
ticketCard = document.getElementById("ticket");

generator.addEventListener("click",
 function() {
    ticketCard.classList.Add = "active";
  });

console.log(generator, ticketCard);
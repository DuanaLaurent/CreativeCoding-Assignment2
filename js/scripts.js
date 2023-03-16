function showMood(){ //this function displays the mood section once the first button is clicked
    let displayMood;
    displayMood = document.getElementById("mood").style.display = "block";
    let hideHeader = document.getElementById("header-text").style.display = "none";
}

function showBudget() { //this function displays the budget section once the next button is clicked
    let displayBudget;
    displayBudget = document.getElementById("budget").style.display = "block";
}


//variable declaration section
const moodSelection = document.getElementById("mood-send");
const moodButtons = document.getElementsByTagName('input[name="mood-selection"]');
const budgetSelection = document.getElementById("budget-send");
const budgetButtons = document.getElementsByTagName('input[name="budget-selection"]');

//adding event listeners to pass button click through function
moodSelection.addEventListener('click', generateOptions);
budgetSelection.addEventListener('click', generateOptions);

/* Concept for grabbing radio button values taken from
https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/ */

/* Concept for event listeners taken from https://www.w3schools.com/js/js_output.asp */

function generateOptions() {
    let selectedMood;
    for (const moodButton of moodButtons) { //assigns moodBudget to the value of what user chose
        if (moodButton.checked) {
            selectedMood = moodButton.value;
            break;
        }
    }

    let selectedBudget; 
    for (const budgetButton of budgetButtons) { //assigns selectedBudget to the value of what user chose
        if (budgetButton.checked) {
            selectedBudget = budgetButton.value;
            break;
        }
    }

    var generated;
    var randomChoice; //will allow computer to randomize response

    if ((selectedMood = "Fast Food") && (selectedBudget = "As little as possible")) {
        const fastCheap = ["Wendy's", "Burger King", "McDonald's", "Tim Hortons", "Pizza Hut", "A&W"];
        randomChoice= fastCheap[Math.floor(Math.random()*fastCheap.length)]; //to randomize the selection
        //concept taken from https://css-tricks.com/snippets/javascript/select-random-item-array/
    }
    
    if ((selectedMood = "Fast Food") && (selectedBudget = "I got a bit to spend")) {
        const fastAverage = ["Shelby's Shawarma", "Gino's Pizza", "Asian Fusion", "241 Pizza", "Pizza Pizza", "Popeye's"];
        randomChoice= fastAverage[Math.floor(Math.random()*fastAverage.length)];
    }

    if ((selectedMood = "Fast Food") && (selectedBudget = "I'll splurge if it tastes good")) {
        const fastExpensive = ["FRESHII X SHELL", "Five Guys", "Wahlburgers", "Smashburger", "Grill Gate", "Holy Chuck"];
        randomChoice= fastExpensive[Math.floor(Math.random()*fastExpensive.length)]; 
    }

    if ((selectedMood = "Something Healthy") && (selectedBudget = "As little as possible" )) {
        const healthyCheap = ["Veg Eater", "Harvest Green", "Buddha's Vegan", "Salad Days", "Salad House", "Crave Healthy Habits"];
        randomChoice= healthyCheap[Math.floor(Math.random()*healthyCheap.length)];
    }

    if ((selectedMood = "Something Healthy") && (selectedBudget = "I got a bit to spend" )) {
        const healthyAverage = ["The Poké Box", "Rolltation", "Fresh on Bloor", "Green Earth Vegan Cuisine", "Basil Box"];
        randomChoice= healthyAverage[Math.floor(Math.random()*healthyAverage.length)]; 
    }

    if ((selectedMood = "Something Healthy") && (selectedBudget = "I'll splurge if it tastes good" )) {
        const healthyExpensive = ["Riz on Yonge", "Vidya's Veggie Gourmet", "Freshii", "Churchill Lounge", "PLANTA Queen Toronto"];
        randomChoice= healthyExpensive[Math.floor(Math.random()*healthyExpensive.length)]; 
    }
    
    if ((selectedMood = "Fine Dining") && (selectedBudget = "As little as possible")) {
        const fancyCheap= ["You can't afford that", "No money = no fine dining", "Try this again when you have some more cash"];
        randomChoice= fancyCheap[Math.floor(Math.random()*fancyCheap.length)];
    }
    
    if ((selectedMood = "Fine Dining") && (selectedBudget = "I got a bit to spend")) {
        const fancyAverage = ["The Shore Club", "Grazie Ristorante", "Bistro Camino", "255 By Alta Rossa", "Agio", "Bumpkins"];
        randomChoice= fancyAverage[Math.floor(Math.random()*fancyAverage.length)];
    }

    if ((selectedMood = "Fine Dining") && (selectedBudget = "I'll splurge if it tastes good")) {
        const fancyExpensive = ["Le Montmatre", "Scaramouche Restaurant", "Jacobs & Co. Steakhouse", "Alo Restaurant", "The CN Tower", "Aloette", "Auberge du Pommier"];
        randomChoice= fancyExpensive[Math.floor(Math.random()*fancyExpensive.length)];
    }

    generated = document.getElementById("answer").innerHTML = "Our recommendation:" + " "  + randomChoice;

    var endButtons = document.getElementById("end-buttons").style.display = "block"; //displays redo and restart buttons at end of selection
    

}
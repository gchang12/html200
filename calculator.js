// declare accumulator and upper limit for accumulator
const budget = 2700;
let budgetConsumed = budget;

// Sam's Club prices for these items; constant only in theory when really the prices fluctuate every week or so.
const eggsPrice = 7.99; // 2 dozen (i.e. 24 eggs)
const chickenPrice = 4.99;

// Tax rate for the area of current residence.
// Source: https://tax.nv.gov/tax-types/sales-tax-use-tax/
const taxRate = 1.08265;

// mutable, and may be modified by user during runtime.
let numEggs = 1;
let numChicken = 1;

// total cost of buying items of specified quantity
let eggsCost = eggsPrice * numEggs * taxRate;
let chickenCost = chickenPrice * numChicken * taxRate;

// estimating cost of eating per day
const numberMealsChickenCanFeed = 5;
let dailyChickenMealCost = (chickenCost / numberMealsChickenCanFeed).toFixed(2);
const numberMealsEggsCanFeed = 12; // 2 eggs = 1 meal
let dailyEggsMealCost = (eggsCost / numberMealsEggsCanFeed).toFixed(2);

console.log(`One chicken can supply a whole meal at $${dailyChickenMealCost} per day.`) // 1.08
console.log(`Two dozens of eggs can supply a whole meal at $${dailyEggsMealCost} per day.`) // 0.72; 2 eggs = 1 meal
// The egg prices are still less than ideal; they should cost half as much as a whole hicken.

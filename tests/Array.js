var Expenses = Array(6)
var Expenses = new Array(20,40,35,12,37,100)
console.log(Expenses)

//Calculate the total expenses by summing all the elements of the array.


var Sum=0
for(let i = 0; i < Expenses.length; i++) {
    Sum += Expenses[i];    
}  console.log(Sum);

//Find the highest and lowest individual expenses within the array.
let highest = Expenses[0];
for (let i = 1; i < Expenses.length; i++) {
    if (Expenses[i] > highest) {
        highest = Expenses[i];
    }
}
console.log("Highest Expense: " + highest);
    

var Highest = Math.max(...Expenses);
var Lowest = Math.min(...Expenses); 
console.log("Highest Expense: " + Highest);
console.log("***********************")
console.log("Lowest Expense: " + Lowest);
console.log("***********************")

//Find the average expense by dividing the total expenses by the number of elements in the array.

let Amount
Amount=new Array(2,48,35,19,27,200)
Amount=new Array(21,8,5,9,7,80)
console.log(Amount)

Amount1 = [20,40,35,12,37,100]
console.log(Amount1)

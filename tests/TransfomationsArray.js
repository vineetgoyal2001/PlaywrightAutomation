//You have an array called productPrices with various product prices.
var productPrices = [
    { name: "Apple", price: 1.2 },
    { name: "Banana", price: 0.8 },
    { name: "Orange", price: 1.5 },
    { name: "Grapes", price: 2.0 },
    { name: "Mango", price: 2.5 }
];
console.log(productPrices);
//Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.
var discountedPrices = productPrices.map(product => {
    return { name: product.name, price: (product.price * 0.9).toFixed(2) };
});
//Use the filter method to create a new array called affordableProducts containing only products priced below $50
var affordableProducts = productPrices.filter(product => product.price < 50);
console.log("Affordable Products:", affordableProducts);    
console.log(discountedPrices);

//Calculate the total cost of all items in the affordableProducts array using the reduce method.
var totalCost = affordableProducts.reduce((sum, product) => sum + parseFloat(product.price), 0);
console.log("Total Cost of Affordable Products:", totalCost);   
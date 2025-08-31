//Define an array
const fruites = ['apple', 'banana', 'mango', 'orange'];

//Access the array elements
console.log(fruites[0]); // Output: apple   
console.log(fruites[2]); // Output: mango

//Add an element to the array
fruites.push('grape');  
console.log(fruites); // Output: ['apple', 'banana', 'mango', 'orange', 'grape']

//Remove the last element from the array
fruites.pop();
console.log(fruites); // Output: ['apple', 'banana', 'mango', 'orange']

//Remove an element from a specific index
fruites.splice(1, 1); // Removes 'banana' at index 1
console.log(fruites); // Output: ['apple', 'mango', 'orange']

//Find the length of the array  
console.log(fruites.length); // Output: 4

//Replace an element at a specific index
fruites[1] = 'kiwi'; // Replaces 'mango' with '

//Add an element at the beginning of the array
fruites.unshift('kiwi');
console.log(fruites); // Output: ['kiwi', 'apple', 'banana', 'mango', 'orange']

//Remove the first element from the array
fruites.shift();
console.log(fruites); // Output: ['apple', 'banana', 'mango', 'orange']

//Find the index of an element
console.log(fruites.indexOf('mango')); // Output: 2

//Iterate over the array
fruites.forEach((fruites, index)=>  {  
    console.log('${index}: ${fruites}');
});




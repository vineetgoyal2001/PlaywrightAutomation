var students = [
    { name: "John", age: 20, grade: "A" },  
    { name: "Jane", age: 22, grade: "B" },
    { name: "Jim", age: 21, grade: "C" }, 
    { name: "Jill", age: 23, grade: "A" },
    { name: "Jack", age: 20, grade: "B" }
];
var studentNames = students.map(student => student.name);
//console.log("Students names are:",studentNames)

var studentage = [];
for (let i = 0; i < students.length; i++) {
    studentage.push(students[i].age);
}
//console.log("Students ages are:",studentage);
//Add a new student name to the beginning of the array.
students.unshift({ name: "Jake1", age: 19, grade: "A" });
console.log("After adding Jake:", students);
var studentNames = students.map(student => student.name);
//Remove the last student name from the array.
students.pop();
//console.log("After removing the last student:", students);
//Alphabetize the student names within the array.
students.sort((j, b) => j.name.localeCompare(b.name));
console.log("Alphabetized student names:", students.map(student => student.name));


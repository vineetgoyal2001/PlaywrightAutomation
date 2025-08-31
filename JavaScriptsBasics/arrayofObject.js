const students = [
    { name: "alice", score: 85 },
    { name: "alex", score: 30 },
    { name: "john", score: 70 },
    { name: "jane", score: 20 },
];

const passedStudents = students.filter(student => student.score > 50);
console.log(passedStudents);
// Output: [ { name: 'alice', score: 85 }, { name: 'john', score: 70 } ]

const upperStudentName=passedStudents.map(student =>student.name.toUpperCase());
console.log(upperStudentName); 
// Output: [ 'ALICE', 'JOHN' ]
const totalScore=passedStudents.reduce(function(acc, student) {
    acc=acc + student.score;
},0);

console.log(totalScore);
// Output: 155



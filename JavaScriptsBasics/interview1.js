const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
person.greet();

function sayHello() {
    console.log("Hello, World!");
}
sayHello();

function sayHello1() {
    return("Hello, Dublin!");
}
const hellomessage=sayHello1();
console.log(hellomessage);
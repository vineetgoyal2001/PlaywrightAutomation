//var is function scoped and globally scoped and can be re-declared and updated
function varTest() {
    var x = 1;
    if (true){
        var x = 2;  // same variable!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}
varTest();

//let is block scoped and can be updated but cannot be re-declared
function letTest() {
    let x = 1;
    if (true){
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
}
letTest();
//const is block scoped and cannot be updated or re-declared
function constTest() {
    const x = 1;
    if (true){
        const x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log("The value of const value is",x);  // 1
} constTest();
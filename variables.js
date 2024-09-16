var name = "Pawan"; //Function-scoped
let age = 23; //block-scoped
const isStudent = true; // Block-scoped and constant
console.log(name);

name = "Khush"; //reassigned
age = 22; //reassigned
//isStudent = false; // Assignment to constant variable.

console.log(name);
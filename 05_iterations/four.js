// For in loop
// Syntax:
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// } 

// const myObject = {
//     js: 'JavaScript',
//     cpp: 'C++',
//     rb: 'Ruby'
// }
// for (const key in myObject) {
//     console.log(key);
    
// }


// const myObject = {
//     js: 'JavaScript',
//     cpp: 'C++',
//     rb: 'Ruby'
// }
// for (const key in myObject) {
//     console.log(myObject[key]);
    
// }


// const myObject = {
//     js: 'JavaScript',
//     cpp: 'C++',
//     rb: 'Ruby'
// }
// for (const key in myObject) {
//     console.log(`${key} is shortcut for ${myObject[key]} `);    
// }


// const program = ["js", "rb", "py", "java", "cpp"]
// for (const key in program) {
//    console.log(key);
// }

// const program = ["js", "rb", "py", "java", "cpp"]
// for (const key in program) {
//    console.log(program[key]);   
// }

// iteration is not possible in forin loop
// const map = new Map()
// map.set('IN', "India")
// map.set('US', "United States")
// map.set('UK', "United Kingdom")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);    
// }
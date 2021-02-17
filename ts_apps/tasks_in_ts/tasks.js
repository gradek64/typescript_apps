/*
    given and array of number below
    calculate a sum of those numbers as [].reduce() method does but

    1. write your own reduce function  with vanilla javascript
    1a. write your own reduce function that accept custom reducer function
    with vanilla javascript with initial value 5
    1a. write your own reduce function that accept custom reducer function
    that would accept any data in this case array of objects given:

    const students = [
      {id:1,name:'Greg'},
      {id:2,name:'Busra'},
      {id:3,name:'Monica'},
    ]

    reduce outcome:
    ['Greg-1','Busra-2','Monica-3']

*/
var numbers = [1, 2, 3, 4, 5];
// example of reduce sum 
var jsReduceMethod = numbers.reduce(function (acc, el) { return acc + el; });
console.log('jsReduceMethod', jsReduceMethod);
var students = [
    { name: 'Greg' },
    { name: 'Busra' },
    { name: 'Monica' },
];
//task 1a
var vanillaJsReduce = function (list, initialValue) {
    var output = initialValue;
    list.forEach(function (el) {
        output += el; // output = output + el
    });
    return output;
};
var outcomeReduceVanillaJS = vanillaJsReduce(numbers, 0);
console.log('outcomeReduceVanillaJS', outcomeReduceVanillaJS);
//task 1b
var vanillaJsReducerMethod = function (list, reducer, initialValue) {
    var output = initialValue;
    list.forEach(function (el) {
        output = reducer(output, el);
    });
    return output;
};
var sumReducer = function (output, el) { return output + el; };
var outcomeVanillaJsReducerMethod = vanillaJsReducerMethod(numbers, sumReducer, 5);
console.log('outcomeVanillaJsReducerMethod', outcomeVanillaJsReducerMethod);
//task 1c
var vanillaJsReducerMethodAnyArray = function (list, reducer, initialValue) {
    var output = initialValue;
    list.forEach(function (el) {
        output = reducer(output, el);
    });
    return output;
};
//with numbers 
var reducerMethodSum = function (output, el) { return output + el; };
var outcomeWithNumberArray = vanillaJsReducerMethodAnyArray(numbers, reducerMethodSum, 5);
console.log('outcomeWithNumberArray', outcomeWithNumberArray);
//with objects
var reducerMethodObjects = function (output, el) {
    output.push(el.name + "-" + (output.length + 1));
    return output;
};
//reduce outcome:
//['Greg-1','Busra-2','Monica-3']
var outcomeWithObjectArray = vanillaJsReducerMethodAnyArray(students, reducerMethodObjects, []);
console.log('outcomeWithObjectArray', outcomeWithObjectArray);
/* const executeFunction = (a:any,b:any,fn:<T>(a:T,b:T)=>T)=> {
 return fn(a,b)
}
const sum = (a:number,b:number)=>a+b
const result = executeFunction(3,5,sum) */

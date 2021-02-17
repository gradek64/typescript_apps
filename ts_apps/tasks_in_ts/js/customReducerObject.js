"use strict";
/*
    given and array of number below
    calculate a sum of those numbers as [].reduce() method does but

    1a. write your own reducer function that accept custom reducer function
    that would accept any array data
    
    1a. Having reducer for calculating average number of age of all students in the list
    2a. Having reducer for making all list of students as below strings
    reduce outcome:
    ['Greg-1','Busra-2','Monica-3']
    
    data to achieve these points is given:

    const students = [
      {id:1,name:'Greg',age:45},
      {id:2,name:'Busra',age:21},
      {id:3,name:'Monica',age:26},
    ]
 

*/
exports.__esModule = true;
//*********write documentation
// about (...args) as array how different is that from function(args) //not array
//https://javascript.info/rest-parameters-spread
// how reduce work with as extending reduce as const reducer = [].reduce((acc,el,i)=>(...args)=>{...reduce calculations})
// called by reducer(5) normally just reducer without calling it 
// how custom compose work with [].reduceRight()
//https://medium.com/@dtipson/creating-an-es6ish-compose-in-javascript-ac580b95104a
// different way of achieving chaining by either composing or chaining
//imports 
var customCompose_1 = require("./misc/customCompose");
//helpers 
var limitTo2Decimal1 = function (value) { return Math.round(value * 100) / 100; };
/******************   data  ****************/
var studentsArr = [
    { id: 1, name: 'Greg', age: 45 },
    { id: 2, name: 'Busra', age: 21 },
    { id: 3, name: 'Monica', age: 26 },
];
/******************/
/****** Method 1 with customCompose method  **********/
/**
* pluck
* @param data => an array of objects to pluck from
* @param {string} el => prop on object to get value
*/
var pluck = function (data, prop) { return data.map(function (element) { return element[prop]; }); };
/**
* reduceAverage
* @param data => an array of numbers first method
* @param data.reduce() => regular js reduce from most left element to most right
*/
var reduceAverage = function (data) { return data.reduce(function (acc, el, index) {
    return index !== data.length - 1 ? acc + el : limitTo2Decimal1((acc + el) / data.length);
}); };
/**
* customCompose
* @param pluck => first method that takes (studentsArr,'age')
* @param reduceAverage => second method that takes result of first one ...and so on ... if more methods
*/
var calculations = customCompose_1.customCompose(pluck, reduceAverage)(studentsArr, 'age');
console.log('calculations with compose', calculations);
var customReducer = function (list, reducer, initialValue) {
    var output = initialValue;
    list.forEach(function (el, i) {
        output = reducer(output, el, list.length, i);
    });
    return output;
};
//1. create number array from pluck reducer
/**
  * convertObjectToArrayReducer
  * @param output => an array of elements reduced(mutable) empty at first
  * @param el => an object entry
  */
var pluckAgeProp = function (output, el) {
    output.push(Number(el.age));
    return output;
};
//2. calculate average
/**
 * reducerCalculateAverage
 * @param output
 * @param el
 * @param dataLength
 * @param index
 */
var reducerCalculateAverage = function (output, el, dataLength, index) {
    return index !== dataLength - 1 ? output + el : limitTo2Decimal1((output + el) / dataLength);
};
var arrayNumbers = customReducer(studentsArr, pluckAgeProp, []);
var calculateAverage = customReducer(arrayNumbers, reducerCalculateAverage, 0);
console.log('calculateAverage single reducer', calculateAverage);

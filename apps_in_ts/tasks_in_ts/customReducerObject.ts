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




//*********write documentation
// about (...args) as array how different is that from function(args) //not array
//https://javascript.info/rest-parameters-spread
// how reduce work with as extending reduce as const reducer = [].reduce((acc,el,i)=>(...args)=>{...reduce calculations})
// called by reducer(5) normally just reducer without calling it 
// how custom compose work with [].reduceRight()
//https://medium.com/@dtipson/creating-an-es6ish-compose-in-javascript-ac580b95104a
// different way of achieving chaining by either composing or chaining

//imports 
import {customCompose} from './misc/customCompose'
//helpers 
const limitTo2Decimal1 = (value:number)=>Math.round(value * 100) / 100


/******************   data  ****************/ 
const studentsArr = [
  {id:1,name:'Greg',age:45},
  {id:2,name:'Busra',age:21},
  {id:3,name:'Monica',age:26},
]

/******************/

 /****** Method 1 with customCompose method  **********/

  /**
  * pluck
  * @param data => an array of objects to pluck from
  * @param {string} el => prop on object to get value
  */
 const pluck = (data:{[key:string]:any}[],prop:string) => data.map(element => element[prop]);
 
  /**
  * reduceAverage
  * @param data => an array of numbers first method
  * @param data.reduce() => regular js reduce from most left element to most right
  */

 const reduceAverage = (data:number[]) => data.reduce((acc,el,index)=> {
  return index !== data.length-1 ? acc + el : limitTo2Decimal1((acc + el)/data.length)
 })

  /**
  * customCompose
  * @param pluck => first method that takes (studentsArr,'age')
  * @param reduceAverage => second method that takes result of first one ...and so on ... if more methods
  */

const calculations = customCompose(pluck,reduceAverage)(studentsArr,'age')
console.log('calculations with compose',calculations)



 /****** Method 2 with single iterative function reducer **********/


 /**
 * @param list => list of items to iterate on 
 * @reducer => a method executed or every iteration that is custom according to needs as sum(), multiply() any pure return function
 * @initialValue => first output value for first iteration 
 * 
*/
interface pluckReducer {
  (output:any,el:{[key:string]:any},...args:any): any;
}
interface calculateAverage2 {
  (output:number,el:number,...args:any)
}
const customReducer  = (
  list:any[],
  reducer:pluckReducer | calculateAverage2,
  initialValue:any) => {
  
  let output = initialValue;
  list.forEach((el,i)=>{
    output = reducer(output,el,list.length,i)
  })
  return output;
 }

  //1. create number array from pluck reducer

 /**
   * convertObjectToArrayReducer
   * @param output => an array of elements reduced(mutable) empty at first
   * @param el => an object entry
   */

  const pluckAgeProp = (output:any[],el:{[key:string]:any}) => {
    output.push(Number(el.age));
    return output;
   }

  //2. calculate average

 /**
  * reducerCalculateAverage
  * @param output 
  * @param el 
  * @param dataLength 
  * @param index 
  */

const reducerCalculateAverage = (output:number,el:number,dataLength:number,index:number)=> {
  return index !== dataLength-1 ? output + el : limitTo2Decimal1((output + el)/dataLength)
 } 
  

 const arrayNumbers = customReducer(studentsArr,pluckAgeProp,[])
 const calculateAverage = customReducer(arrayNumbers,reducerCalculateAverage,0)

 console.log('calculateAverage single reducer',calculateAverage)






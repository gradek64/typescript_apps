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
const numbers = [1,2,3,4,5]
// example of reduce sum 
const jsReduceMethod = numbers.reduce((acc,el)=>acc+el)
console.log('jsReduceMethod',jsReduceMethod)

const students = [
  {name:'Greg'},
  {name:'Busra'},
  {name:'Monica'},
]


//task 1a
const vanillaJsReduce = (list:number[],initialValue:number) => {
 let output = initialValue;
 list.forEach((el)=>{
  output += el // output = output + el
 })
 return output;
}
const outcomeReduceVanillaJS = vanillaJsReduce(numbers,0)
console.log('outcomeReduceVanillaJS',outcomeReduceVanillaJS)

//task 1b
const vanillaJsReducerMethod = (
  list:number[],
  reducer:(output:number,el:number)=>number,
  initialValue:number) => {
  
  let output = initialValue;
  list.forEach((el)=>{
   output = reducer(output,el)
  })
  return output;
 }
const sumReducer = (output:number,el:number)=> output + el 
const outcomeVanillaJsReducerMethod = vanillaJsReducerMethod(numbers,sumReducer,5)
console.log('outcomeVanillaJsReducerMethod',outcomeVanillaJsReducerMethod)

//task 1c

//possible reducer interfaces
interface calculateSum {
  (output:number, el: number):number;
}

interface convertObjectToArray {
  (output:string[],el:{[key:string]:unknown}):string[];
}
const vanillaJsReducerMethodAnyArray = (
  list:any[],
  reducer:calculateSum|convertObjectToArray,
  initialValue:any) => {
  
  let output = initialValue;
  list.forEach((el)=>{
   output = reducer(output,el)
  })
  return output;
 }

//with numbers 
const reducerMethodSum = (output:number,el:number)=> output + el 
const outcomeWithNumberArray = vanillaJsReducerMethodAnyArray(numbers,reducerMethodSum,5)
console.log('outcomeWithNumberArray',outcomeWithNumberArray)
//with objects

const reducerMethodObjects = (output:string[],el:{[key:string]:unknown})=> {
  output.push(`${el.name}-${output.length+1}`)
  return output
}
//reduce outcome:
//['Greg-1','Busra-2','Monica-3']
const outcomeWithObjectArray = vanillaJsReducerMethodAnyArray(students,reducerMethodObjects,[])
console.log('outcomeWithObjectArray',outcomeWithObjectArray)

/* const executeFunction = (a:any,b:any,fn:<T>(a:T,b:T)=>T)=> {
 return fn(a,b)
}
const sum = (a:number,b:number)=>a+b
const result = executeFunction(3,5,sum) */

interface AddConst_ts_es6_interface_skipped_return {
  (xtype: number, key: number);
}
type ObjectStructure = {
  name: string;
  lastname: string;
  age: number;
}
const addConst_ts_es6_interface_skipped_return: AddConst_ts_es6_interface_skipped_return = (
  x,
  y: number
) => {
  return x + y;
};

/**
 * 1. find properties 'profit..' in an object,
 * 2. for duplicates take their value and sum it up
 * 3. Create final list with unique properties and sum up values
 * 
 */

 //data
 const data = [
   {profit1:10,profit2:10,profit3:10},
   {profit1:10,profit2:10,profit3:10},
   {profit1:10,profit2:10,profit3:10,profit4:40}
 ]

 //outcome
 const outcome = {profit1:30,profit2:30,profit3:30,profit4:40}

 /**
  * @param outcome => object sent on evert iteration
  * @param obj => single object coming from data objects
 */

 interface extractUniqueValueInt {(outcome:Object,obj:Object):Object}

 const generateUniqueValue:extractUniqueValueInt = (outcome,obj) => {
  return Object.keys(obj).reduce((acc,key)=>{
      acc[key] = !acc[key] ? obj[key] : acc[key] += obj[key]
    return acc;
  },outcome)
 }

  /**
  * @param data => data objects to iterate on
 */

const customReducer = (data:Object[],reducerMethod:extractUniqueValueInt)=>{
  let outcome = {};
  data.forEach(obj => {
    outcome = reducerMethod(outcome,obj)
  });
  return outcome
}

// before refactoring
const findUniqueBefore = (data:Object[])=>{
  let outcome = {};
  data.forEach(obj => {
    Object.keys(obj).forEach(key=>{
      if(!outcome[key]){
        outcome[key] = obj[key]
      }else{
        outcome[key] += obj[key]
      }
    }) 
  });
  return outcome
}

console.log('result from unique object sum up properties:', customReducer(data,generateUniqueValue))
console.log('before refactoring:', findUniqueBefore(data))